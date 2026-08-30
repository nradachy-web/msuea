# msuea.org cutover runbook

Verified live 2026-08-17 by DNS lookup, not by assumption. The earlier
version of this file guessed Squarespace; that was wrong.

## Where things actually live

| Thing            | Where                                          |
| ---------------- | ---------------------------------------------- |
| Registrar        | Network Solutions (domain locked, expires 2027-07-29) |
| DNS / nameservers| **Wix** (ns12.wixdns.net, ns13.wixdns.net)     |
| Current live site| Google Sites, via `www` CNAME to ghs.googlehosted.com |
| Apex today       | Four Squarespace IPs that only 301 to www      |
| Email on domain  | MX points at mail.msuea.org, which resolves to nothing. No working @msuea.org email to break. |

**All DNS edits happen in Wix**, not Network Solutions and not
Squarespace. Someone on the board needs the Wix account login. Path:
Wix dashboard > Domains > msuea.org > Advanced > Edit DNS records.

If nobody can get into Wix, plan B is to change the nameservers at
Network Solutions to another DNS host and rebuild the zone from
scratch. That wipes the Google verification TXT below, so copy it out
first.

## 1. DNS records (in Wix)

### Delete

| Type  | Host | Current value           | What it is        |
| ----- | ---- | ----------------------- | ----------------- |
| A     | @    | 198.185.159.144         | Squarespace, dead |
| A     | @    | 198.185.159.145         | Squarespace, dead |
| A     | @    | 198.49.23.144           | Squarespace, dead |
| A     | @    | 198.49.23.145           | Squarespace, dead |
| CNAME | www  | ghs.googlehosted.com    | the old Google Site |

### Add

| Type  | Host | Value                  |
| ----- | ---- | ---------------------- |
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | nradachy-web.github.io |

Optional IPv6, same four hosts, add only if Wix accepts AAAA:

| Type | Host | Value                |
| ---- | ---- | -------------------- |
| AAAA | @    | 2606:50c0:8000::153  |
| AAAA | @    | 2606:50c0:8001::153  |
| AAAA | @    | 2606:50c0:8002::153  |
| AAAA | @    | 2606:50c0:8003::153  |

### Leave alone

- `TXT @ google-site-verification=SqAnVxaoBwxqzaB9MTzYAwH2gRsbL9Zb4NkpY1g352E`
  This is the club's Google ownership proof. Deleting it can cost them
  Search Console access.
- The NS records.
- The MX record. It is already broken, and a website cutover is the
  wrong moment to touch mail. Fix it separately if they ever want
  @msuea.org addresses.

There are no CAA records, so nothing blocks the GitHub certificate.

## 2. Repo flip (Nick runs these, right after the DNS edit)

```
gh variable set CUSTOM_DOMAIN --repo nradachy-web/msuea --body "www.msuea.org"
gh variable delete NEXT_PUBLIC_BASE_PATH --repo nradachy-web/msuea
gh workflow run deploy.yml --repo nradachy-web/msuea
```

Deleting NEXT_PUBLIC_BASE_PATH is what turns off the preview noindex
and the robots.txt disallow. Setting CUSTOM_DOMAIN is what writes the
CNAME file, which sets the Pages custom domain automatically.

The preview URL nradachy-web.github.io/msuea stops serving the site at
that path once this lands. That is expected.

## 3. GitHub Pages settings

Repo Settings > Pages should now show `www.msuea.org`. Once DNS
resolves, check "Enforce HTTPS". The certificate can take up to an
hour after propagation.

## 4. Verify

- https://www.msuea.org loads the new site with a valid certificate.
- https://msuea.org redirects to www.
- View source: no `noindex` meta.
- https://www.msuea.org/robots.txt says `Allow: /`, not `Disallow: /`.
- Only after the above pass: unpublish the old Google Site so it stops
  competing in search.

Propagation is up to a few hours. Wix's zone TTL floor is one hour, so
nothing is instant and nothing being live five minutes later is a
problem.

## Rollback

Re-add the old `www` CNAME to ghs.googlehosted.com in Wix. The Google
Site is untouched until step 4's last line, so it comes straight back.
Then delete CUSTOM_DOMAIN, restore NEXT_PUBLIC_BASE_PATH to /msuea,
and re-run the workflow.

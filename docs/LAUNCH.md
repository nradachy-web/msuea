# msuea.org cutover runbook

The club owns msuea.org. The current site is a Google Sites page, and
the domain is most likely registered at Squarespace Domains (Google
Domains transferred there in 2023), which matches the club saying it
is "hosted on Squarespace". Confirm the registrar with Angela or Nick
Ealy at the meeting; the steps below work from any registrar's DNS
panel.

## 1. DNS records (at the registrar)

Delete any existing A/AAAA/CNAME records the old site uses on `@` and
`www`, then add:

| Type  | Host | Value                  |
| ----- | ---- | ---------------------- |
| CNAME | www  | nradachy-web.github.io |
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |

## 2. Repo flip (Nick runs these)

```
gh variable set CUSTOM_DOMAIN --repo nradachy-web/msuea --body "www.msuea.org"
gh variable delete NEXT_PUBLIC_BASE_PATH --repo nradachy-web/msuea
gh workflow run deploy.yml --repo nradachy-web/msuea
```

## 3. GitHub Pages settings

In repo Settings > Pages, set the custom domain to `www.msuea.org`
once DNS resolves, and check "Enforce HTTPS" after the certificate
issues (can take up to an hour after DNS propagates).

## 4. Verify

- https://www.msuea.org loads the new site with a valid certificate.
- https://msuea.org redirects to www.
- View source: no `noindex` meta, canonical points at msuea.org.
- Old Google Sites page unpublished so it stops competing in search.

## Rollback

Reverse step 2 (delete CUSTOM_DOMAIN, restore NEXT_PUBLIC_BASE_PATH
to /msuea, re-run the workflow) and point DNS back. Nothing about the
old site is touched until the club unpublishes it.

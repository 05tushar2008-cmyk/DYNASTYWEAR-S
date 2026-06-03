import os, re
files = ["index.html", "collections.html", "collections2.html", "product.html", "cart.html", "checkout.html", "account.html", "admin.html", "js/ecommerce.js"]
pattern = re.compile(r"A\?sA1|A\ufffdsA1|â‚¹|Ã¢â€šÂ¹")
for f in files:
    if os.path.exists(f):
        with open(f, "r", encoding="utf-8", errors="ignore") as fd:
            c = fd.read()
        new_c = pattern.sub(r"&#8377;" if f.endswith(".html") else r"\u20B9", c)
        with open(f, "w", encoding="utf-8") as fd:
            fd.write(new_c)
print("Encoding fixed!")

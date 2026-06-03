import re

with open('collections.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all product cards and their IDs
pattern = r'<div class="group product-card" data-current-index="\d+" data-product-id="(\d+)">.*?<div class="quick-view[^>]*>\s*<button class="(w-full bg-primary text-on-primary py-3 font-label-caps text-label-caps hover:bg-primary-container active:scale-\[0\.98\] transition-all uppercase tracking-\[0\.2em\] shadow-lg)">BUY NOW</button>'

def repl(match):
    prod_id = match.group(1)
    btn_class = match.group(2)
    
    # We replace the button with an anchor tag
    original = match.group(0)
    new_html = original.replace(
        f'<button class="{btn_class}">BUY NOW</button>',
        f'<a href="product.html?id={prod_id}" class="{btn_class} block text-center">BUY NOW</a>'
    )
    return new_html

new_content = re.sub(pattern, repl, content, flags=re.DOTALL)

with open('collections.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done fixing collections.html")

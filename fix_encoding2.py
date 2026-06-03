import os

file_path = 'index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('â‚¹', '₹')
content = content.replace('Â©', '©')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Replaced characters successfully')

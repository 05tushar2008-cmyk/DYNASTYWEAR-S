$files = @("index.html", "collections.html", "collections2.html", "product.html", "cart.html", "checkout.html", "account.html", "admin.html")
foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        # Replace the mangled symbols
        $content = $content -replace 'Ã¢â€šÂ¹', '&#8377;'
        $content = $content -replace 'â‚¹', '&#8377;'
        $content = $content -replace '₹', '&#8377;'
        Set-Content -Path $file -Value $content -Encoding UTF8
    }
}
$jsContent = Get-Content "js\ecommerce.js" -Raw -Encoding UTF8
$jsContent = $jsContent -replace 'Ã¢â€šÂ¹', '\u20B9'
$jsContent = $jsContent -replace 'â‚¹', '\u20B9'
$jsContent = $jsContent -replace '₹', '\u20B9'
$jsContent = $jsContent -replace 'A\?sA1', '\u20B9'
$jsContent = $jsContent -replace 'A\ufffdsA1', '\u20B9'
$jsContent = $jsContent -replace 'Aï¿½sA1', '\u20B9'
Set-Content -Path "js\ecommerce.js" -Value $jsContent -Encoding UTF8
Write-Output "Encoding fixed successfully."

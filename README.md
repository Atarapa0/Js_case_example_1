# Döviz Hesaplama Uygulaması

Bu proje, güncel döviz kurlarını gösteren ve hesaplama yapabilen bir web uygulamasıdır.

## 🚀 Özellikler

- Güncel döviz kurları görüntüleme
- Alış ve satış fiyatları
- Günlük değişim oranları
- Responsive tasarım
- Bootstrap 5 entegrasyonu
- jQuery ile dinamik içerik

## 💻 Teknolojiler

- **HTML5** - Yapısal içerik
- **CSS3/LESS** - Stil ve tasarım
- **JavaScript** - Dinamik işlevsellik
- **jQuery** - DOM manipülasyonu
- **Bootstrap 5** - Responsive framework
- **JSON** - Veri depolama

## 📁 Proje Yapısı

```
Js deneme/
├── index.html          # Ana HTML dosyası
├── package.json        # Proje konfigürasyonu
└── assets/
    ├── css/
    │   ├── style.css    # Derlenmiş CSS
    │   ├── style.less   # Ana LESS dosyası
    │   └── variables.less # LESS değişkenleri
    ├── img/             # Döviz sembolleri
    │   ├── usd.png
    │   ├── eur.png
    │   ├── gbp.png
    │   ├── xau.png
    │   └── xag.png
    ├── js/
    │   ├── main.js      # Ana JavaScript dosyası
    │   └── jquary.js    # jQuery fonksiyonları
    └── json/
        └── veri.json    # Döviz kuru verileri
```

## 🎯 Desteklenen Dövizler

- **USD** - Amerikan Doları
- **EUR** - Euro
- **GBP** - İngiliz Sterlini
- **XAU** - Altın
- **XAG** - Gümüş

## 📸 Ekran Görüntüsü

<!-- Buraya sitenin görünümünün ekran görüntüsünü ekleyebilirsiniz -->
![Site Görünümü](\assets\img\image.png)

## 🛠️ Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/Atarapa0/Js_case_example_1.git
```

2. Proje dizinine gidin:
```bash
cd "Js deneme"
```

3. Gerekli bağımlılıkları yükleyin:
```bash
npm install
```

4. CSS dosyalarını derleyin:
```bash
npm run build-css
```

5. `index.html` dosyasını tarayıcıda açın.

## 🔧 Geliştirme

### CSS Geliştirme

LESS dosyalarını otomatik olarak derlemek için:
```bash
npm run watch-css
```

### Veri Güncelleme

Döviz kurlarını güncellemek için `assets/json/veri.json` dosyasını düzenleyin.

## 📊 Veri Formatı

```json
{
  "Code": "USD",
  "Name": "Amerikan Doları",
  "LastUpdate": "01/07/2025 14:06",
  "BuyingPrice": 39.262401,
  "SellingPrice": 40.438499,
  "Change": 0.0018320719296954923,
  "Type": "exchange",
  "DailyChangePercent": 20
}
```

## 🎨 Özelleştirme

- LESS değişkenlerini `assets/css/variables.less` dosyasından düzenleyebilirsiniz
- Yeni döviz türleri eklemek için `assets/json/veri.json` dosyasına yeni objeler ekleyin
- İlgili döviz simgelerini `assets/img/` klasörüne ekleyin

## 📱 Responsive Tasarım

Uygulama Bootstrap 5 kullanarak tüm cihazlarda uyumlu çalışacak şekilde tasarlanmıştır:
- Mobil cihazlar (xs, sm)
- Tablet (md)
- Desktop (lg, xl, xxl)

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

Proje sahibi: Atarapa0
GitHub: [@Atarapa0](https://github.com/Atarapa0)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

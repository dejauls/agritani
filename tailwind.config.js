/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './about.html', './brosur.html', './produk.html',
     './artikel.html', './detail-artikel.html', './produkdetail.html', './kontak.html', './implementasi.html', './linkt.html',
     './benarkah-pupuk-aman-untuk-sayuran-fakta-mengejutkan-yang-haruskamu-tahu.html', './terungkap-cara-pemupukan-ajaib-yang-bikin-petani-panen-banyak.html',
     './petani-sukses-bongkar-rahasia-pupuk-NPK-bikin-lahan-pertanian-jadi-super-produktif-tanpa-ribet.html', './rahasia-terbongkar-cara-memilih-pupuk-yang-bikin-padi-dan-palawija-panen-super-melimpah.html'
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#273913',
        'greeno': '#008000',
        'putih': '#fffef4',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

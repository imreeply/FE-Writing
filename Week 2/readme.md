# WEEK 2 Writting - Front-End

## Prop-Types

- PropTypes adalah sebuah library yang berguna untuk memvalidasi sebuah props. PropTypes sangat berguna untuk meminimalisir bug saat pengembangan sebuah aplikasi, Jika props salah maka akan muncul sebuah warning.

- Cara install Prop-Types pada project : `npm install prop-types`
- Cara penggunaan PropTypes :

```
const DataSiswa = ({ nama, umur }) => {
  return (
    <>
      <h2>{nama}</h2>
      <h2>{umur}</h2>
    </>
  );
};

DataSiswa.propTypes = {
  nama: PropTypes.string,
  umur: PropTypes.number,
};

```

- Contoh lain panggunaan PropTypes
  - `nama: PropTypes.any.isRequired` data harus ada
  - `umur: PropTypes.oneOfType([PropTypes.string, PropTypes.number])` memberikan opsi untuk tipe data
  - `data: PropTypes.arrayOf(PropTypes.number)` mengecek value dari props
  - `data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),` array dengan berbagai tipe data

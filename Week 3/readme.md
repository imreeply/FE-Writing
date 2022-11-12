# WEEK 3 Writting - Front-End

## React Context

- React Context adalah cara membuat global state yang akan dapat digunakan pada semua komponen tanpa harus mengirim props ke lower level secara manual, React Context yaitu cara alternatif dari props drilling

```js
const MyContext = React.createContext(defaultValue);
```

> Cara memanggil react context dan menyimpan hasilnya dalam variable

```js
<MyContext.Provider value={/* some value */}>
```

> Setiap object Context memiliki komponen Provider yang memungkinkan Consumer untuk melakukan perubahan.

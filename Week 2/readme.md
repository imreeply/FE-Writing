# WEEK 2 Writting - Front-End

## Prop-Types

- PropTypes adalah sebuah library yang berguna untuk memvalidasi sebuah props. PropTypes sangat berguna untuk meminimalisir bug saat pengembangan sebuah aplikasi, Jika props salah maka akan muncul sebuah warning.

- Cara install Prop-Types pada project : `npm install prop-types`
- Cara penggunaan PropTypes :

```js
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

## React - Router

- React-Router adalah sebuah library yang sangat penting untuk menampilkan banyak tampilan dalam sebuah website single page.

- Cara install React-Router : `npm install react-router-dom@6`

- Penggunaan React-Router

```js
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

> Bungkus `<App />` dengan `<BrowserRouter>` pada file index.jsx

- `import { Routes, Route, Link } from "react-router-dom";` Import Routes, Route, Link pada App.jsx

```js
const App = () => {
    return (
        <>
        <nav>
            <Link to={"/"}>Home </Link>
            <Link to={"/about"}>About</Link>
        </nav>

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/about' element={AboutPage />} />
        </Routes>

        </>
    )
}
```

> File : App.jsx

```js
const HomePage = () => {
  return (
    <>
      <h1>Ini HomePage</h1>
    </>
  );
};
```

> File : HomePage.jsx

```js
const AboutPage = () => {
  return (
    <>
      <h1>Ini AboutPage</h1>
    </>
  );
};
```

> File : AboutPage.jsx

### Outlet

- Outlet digunakan pada Element induk untuk merender child pada parrent

```js
import { Outlet, Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <Outlet />
      <Link to={"student"}>About Student |</Link>
      <Link to={"teacher"}>About Teacher</Link>
    </>
  );
};
```

## Redux

- Redux adalah sebuah library yang berfungsi sebagai state management, dengan menggunakan Redux kita cukup membuat satu state dan state itu dapat diakses komponen manapun.

- `npm install redux react-redux` : cara menginstall Redux pada project
- Ada 3 point pada Redux
  - Action
    > Action merupakan sebuah object yang memiliki property type
  - Store
    > Object action dikirim ke store dengan cara `store.dispatch(ADD_DATA)`, store bisa dibilang tempat dimana global state disimpan dan Dispatch digunakan untuk mengubah state didalam store.
  - Reducer
    > dan kemudian diolah Reducer,

## Redux Thunk

- Redux Thunk adalah middleware yang memungkinkan Anda memanggil pembuat aksi yang mengembalikan fungsi sebagai ganti objek aksi. Fungsi itu menerima metode pengiriman penyimpanan, yang kemudian digunakan untuk mengirim async di dalam isi fungsi setelah operasi asinkron selesai.

- Cara install thunk : `npm install thunk`
- Letakkan `applyMiddleware(thunk)` pada store

### Axios

- Axios merupakan library yang digunakan untuk request data melalui http. `npm i axios`

# WEEK 3 Writting - Front-End

## React Context

- React Context adalah salah satu state management untuk membuat global state yang akan dapat digunakan pada semua komponen tanpa harus mengirim props ke lower level secara manual, React Context yaitu cara alternatif dari props drilling.

```js
import React, { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = {
    name: "Reza",
  };

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};
```

> Cara membuat React Context pada project

```js
return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
```

> Provider digunakan untuk memanggil const

```js
const User = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>Nama saya : {user.name}</h1>
    </>
  );
};

function Home(props) {
  return (
    <>
      <div>
        <UserProvider>
          <User />
        </UserProvider>
      </div>
    </>
  );
}
```

> Cara memanggil sebuah data mengguankan useContext

## REACT TESTING

- React Testing adalah sebuah library yang membantu untuk melakukan testing pada komponen react.

- Didalam testing terdapat 2 metode

  - Manual

    > Melakukan testing manual seperti mengecek menggunakan `console.log`

  - Automation
    > Testing yang dilakukan oleh kode
    - Automation test dibagi menjadi 3
    - 1. E2E
    - 2. Integration
    - 3. Unit
         > Semakin tinggi test, maka semakin lambat proses testingnya

```js
const sum = (x, y) => x + y;

const checkGG = (n) => {
  if (n % 2 == 1) return "Ganjil";
  return "Genap";
};

const isOdd = (n) => {
  if (n % 2 == 1) return true;
};
```

```js
const { sum } = require("./app");

test("menjumlahkan angka pada sum()", () => {
  expect(sum(0, 0)).toBe(0);
  expect(sum(0, 1)).toBe(1);
  expect(sum(1, 1)).toBe(2);
  expect(sum(2, 2)).toBe(4);
});
```

> Cara penggunaan Automation Testing

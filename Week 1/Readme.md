## ReactJS - Introduction

- React adalah sebuah library JavaScript yang digunakan untuk membangun user interface yang interaktif. Library ini dibuat oleh Facebook dan bersifat open source. Library ini sangat populer digunakan dan selalu dikembangkan baik oleh kontributor utama ataupun komunitas.

## Cara Install ReactJS

- Sebelum menginstall React diproject, kita harus menginstall node di nodejs.org/ agar dapat menggukkan `node`
- Setelah menginstall node, cek node apakah sudah benar terinstall dengan cara `npm -v`
- Ada 2 cara dalam menginstall React pada project
  - `npm install -g create-react-app` cara biasa
  - `npm create vite@latest my-react-app --template react` menggunakan ViteJS

## React - JSX

- JSX (Javascript Syntax Extension) adalah sebuah ekstensi React untuk Javascript, Sintaks JSX mirip seperti HTML dimana kita dapat lebih mudah menyusun elemen pada komponen React.

```
const element = <h1>Hello World</h1>
```

> Contoh penggunaan Sintaks pada JSX

## React - Component

- Function Component atau Statless Component yaitu component yang didefinisikan menggunakan function.

```
const Welcome(props) {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default Welcome;


```

- Class Component

```
class WelcomeComponent extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

export default WelcomeComponent;

```

- Perbedaan dari kedua Component tersebut yaitu
  - Function Component hanya bisa menggunakan `props` itu sebabnya component ini sebut `Stateless Component`
  - Class Component dapat menggunakan `state` dan `props`

### React - State & Props

- State adalah data privat pada sebuah component, data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.

```
class WelcomeComponent extends Component {
  render() {
    return <h1>Halo, saya {this.props.name}</h1>;
  }
}
```

- Props singkatan dari _Property_, Jika dalam functional component maka props ini adalah parameternya.

```
const Card = (name) => {
  return (
    <>
      <h1>Halo, Saya {name}</h1>
    </>
  );
};

```

### React - Lifecycle

- Lifecycle bisa diartikan sebagai siklus hidup. ada component - component pada react yang melewati 3 fase hidup
  - Mounting
  - Updating
  - Unmounting
    > Fungsi fungsi ini disebut Lifecycle
  - Mounting yaitu fase ketika component dibuat atau pertama kali dirender ke DOM.
  - Updating yaitu fase ketika sebuah component akan dirender ulang.
  - Unmounting yaitu fase ketika component dihapus dari DOM.

### React - Hooks

- React Hooks digunakan untuk melakukan state management dan side effect didalam function component, dengan Hooks kita dapat menggunakan state dan lifecycle method tanpa harus menuliskan class di React.

```
function MyComponent(name) {
  const [name, setName] = useState("Reza");

  function handleNameChange(e) {
    setName(e.taget.value);
  }
  return (
    <>
      <input value={name} onChange={handleNameChange} />
    </>
  );
}

```

### React - Form

Form dapat digunakan untuk menginput sebuah data oleh user, Form dapat digunakan juga untuk mengambil suatu inputan dari user menggunakan hooks.

```

import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    axios
      .post("https://reqres.in/api/users", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
```

> Contoh membuat Form pada ReactJS

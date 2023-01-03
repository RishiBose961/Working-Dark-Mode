import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  )
  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)")
  // console.log(darkQuery);
  const options = [
    {
      icon: "sunny",
      text: "light"
    },
    {
      icon: "moon",
      text: "dark"
    },
    {
      icon: "desktop-outline",
      text: "system"
    }
  ]

  function onWindowMatch() {
    if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark")
    } else {
      element.classList.remove("dark")
    }
  }
  onWindowMatch()
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark")
        localStorage.setItem('theme', 'dark')
        break;
      case "light":
        element.classList.remove("dark")
        localStorage.setItem('theme', 'light')
        break;
      default:
        localStorage.removeItem('theme')
        onWindowMatch()
        break;
    }
  }, [theme])

  return (
    <section className="min-h-screen pt-8 dark:text-gray-100 dark:bg-slate-900 duration-100">
      <div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded-lg">
        {
          options?.map(opt => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 
            ${theme === opt.text && "text-sky-600"}`}>
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))
        }

      </div>
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center">
          <h2>Code A year</h2>
          <h5>Share And folow</h5>
        </div>
        <p>
          lorem ipsum dolor sit amet, consectetur adip
          Paaya Maine, Paaya Tumhein, Rab Ne Milaya Tumhein,
          Honthon Pe Sajaya Tumhein, Nag Mein Sajaya Tumhein
          Paaya Maine, Paaya Tumhein, Sab Se Chupaya Tumhein,
          Sapna Banaya Tumhein, Neendhon Mein Bulaya Tumhein.

          Tum Jo Aaye Zindagi Mein Baat Ban Gayi
          Ishq Mazhab, Ishq Meri Zaat Ban Gayi

          Paaya Maine, Paaya Tumhein, Rab Ne Milaya Tumhein,
          Honthon Pe Sajaya Tumhein, Nag Mein Sajaya Tumhein
          Paaya Maine, Paaya Tumhein, Sab Se Chupaya Tumhein,
          Sapna Banaya Tumhein, Neendhon Mein Bulaya Tumhein.

          Ho Tum Jo Aaye Zindagi Mein Baat Ban Gayi
          Sapne Teri Chahaton Ke, Sapne Teri Chahaton Ke
          Dekhti Hoon Ab kayi
          Din Hai Sona Aur Chaandi Raat Ban Gayi
          Hoo Tum Jo Aaye Zindagi Mein Baat Ban Gayi
        </p>
      </div>
    </section>
  );
}

export default App;

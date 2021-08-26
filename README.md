# OnTrck - App

OnTrck is an application built with React for an internal workspace communication application. This can also be installed as a progressive web app (PWA).

## Software & Resources

- React
- Firebase
- Material UI
- Ant-Design Icons

## Develop Locally

```
npm install
```
```
npm start
```

## Firebase

- Get you Firbase config information from the [Firebase Console](console.firebase.google.com) 

- (Recommended) Put you config infomation into *.env.sample* and rename it to *.env*

- OR you can just put you config information directly into *Firebase.js* like below.

  ```
  const firebaseConfig = {
    apiKey: 'your-key',
    authDomain: 'your-domain',
    databaseURL: 'your-db',
    projectId: 'your-project',
    storageBucket: 'your-storage',
    messagingSenderId: 'your-messaging-id',
    appId: 'your-app-id',
  };


  firebase.initializeApp(firebaseConfig);
  ```

### Project Structure

```
src
├── components
│   ├── Chat
│   ├── Firebase
|   |  └── Firebase.js
│   ├── Header
│   ├── Login
│   ├── Message
│   └── Sidebar
|   └── Utility
├── License
├── Package.json
├── README.md
└── .env
```
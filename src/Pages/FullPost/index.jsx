import React from 'react';
import Post from '../../components/Post';
import PreloaderFullPost from './PreloaderFullPost';

const FullPost = () => {
    const isLoading = false;

    if (isLoading) return <PreloaderFullPost/>

    return (
            <Post>
                <p>
                    React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
                    React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.
                    React может использоваться для разработки одностраничных и мобильных приложений.React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
                    React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.
                    React может использоваться для разработки одностраничных и мобильных приложений.React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
                    React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.
                    React может использоваться для разработки одностраничных и мобильных приложений.React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
                    React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.
                    React может использоваться для разработки одностраничных и мобильных приложений.React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
                    React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.
                </p>
            </Post>
    );
};

export default FullPost;
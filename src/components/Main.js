import React from 'react';

const Main = () => {


    return (
        <main>
            <section className="profile container">
                <div className="profile__avatar-wrap">
                    <img src="#" alt="Аватар пользователя" className="profile__avatar"/>
                </div>

                <div className="profile__info">
                    <div className="profile__name-wrap">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" className="button-edit profile__button-edit opacity-effect"
                                aria-label="Редактировать профиль"></button>
                    </div>

                    <p className="profile__job">Исследователь океана</p>
                </div>

                <button type="button" className="button-add profile__button-add opacity-effect"
                        aria-label="Добавить место"></button>
            </section>

            <section className="places container" aria-label="Добавленные места">
                <ul className="places__grid"></ul>
            </section>
        </main>
    );
};

export default Main;
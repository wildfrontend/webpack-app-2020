import React from 'react'
import * as S from './Sign.emotion'

const SignFrom = () => {
    return (
        <S.Container>
            <form className="pure-form">
                <fieldset>
                    <legend>建立帳戶</legend>
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="multi-first-name">會員帳號</label>
                            <input
                                type="text"
                                id="multi-first-name"
                                className="pure-u-23-24"
                            />
                            <span className="pure-form-message-inline">
                                帳號由英數字組成，長度為4-16個字元。
                            </span>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="multi-last-name">密碼設定</label>
                            <input
                                type="text"
                                id="multi-last-name"
                                className="pure-u-23-24"
                            />
                            <span className="pure-form-message-inline">
                                請設定您的登入密碼,可由6-10個英數字組成。
                            </span>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="confirm-password">確認密碼</label>
                            <input
                                type="email"
                                id="multi-email"
                                className="pure-u-23-24"
                                required=""
                            />
                            <span className="pure-form-message-inline">
                                請再次確認您設定的密碼。
                            </span>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>個人資料</legend>
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="multi-first-name">真實姓名</label>
                            <input
                                type="text"
                                id="multi-first-name"
                                className="pure-u-23-24"
                            />
                            <span className="pure-form-message-inline">
                                不實姓名無法交易取款。姓名只能是中文，長度為2 -
                                4個字元。
                            </span>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="multi-last-name">暱稱</label>
                            <input
                                type="text"
                                id="multi-last-name"
                                className="pure-u-23-24"
                            />
                            <span className="pure-form-message-inline">
                                請填寫暱稱，暱稱限中文、英文、數字組成，不可輸入特殊符號。
                            </span>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="confirm-password">名稱顯示</label>
                            <label>
                                <input
                                    type="radio"
                                    name="is-shown-real-name"
                                    className="pure-u-23-24"
                                />
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="is-shown-real-name"
                                    className="pure-u-23-24"
                                />
                                <span>真實名稱</span>
                            </label>
                        </div>
                    </div>
                </fieldset>
            </form>
        </S.Container>
    )
}

export default SignFrom

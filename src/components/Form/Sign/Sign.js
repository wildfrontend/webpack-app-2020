import React from 'react'

const SignFrom = () => {
    return (
        <form className="pure-form">
            <fieldset>
                <legend>建立帳戶</legend>
                <div class="pure-g">
                    <div class="pure-u-1 pure-u-md-1-3">
                        <label for="multi-first-name">First Name</label>
                        <input
                            type="text"
                            id="multi-first-name"
                            class="pure-u-23-24"
                        />
                    </div>
                    <div class="pure-u-1 pure-u-md-1-3">
                        <label for="multi-last-name">Last Name</label>
                        <input
                            type="text"
                            id="multi-last-name"
                            class="pure-u-23-24"
                        />
                    </div>
                    <div class="pure-u-1 pure-u-md-1-3">
                        <label for="multi-email">E-Mail</label>
                        <input
                            type="email"
                            id="multi-email"
                            class="pure-u-23-24"
                            required=""
                        />
                    </div>
                    <div class="pure-u-1 pure-u-md-1-3">
                        <label for="multi-city">City</label>
                        <input
                            type="text"
                            id="multi-city"
                            class="pure-u-23-24"
                        />
                    </div>
                    <div class="pure-u-1 pure-u-md-1-3">
                        <label for="multi-state">State</label>
                        <select id="multi-state" class="pure-input-1-2">
                            <option>AL</option>
                            <option>CA</option>
                            <option>IL</option>
                        </select>
                    </div>
                </div>
                <label for="multi-terms" class="pure-checkbox">
                    <input type="checkbox" id="multi-terms" /> I&#x27;ve read
                    the terms and conditions
                </label>
                <button type="submit" class="pure-button pure-button-primary">
                    Submit
                </button>
            </fieldset>
        </form>
    )
}

export default SignFrom

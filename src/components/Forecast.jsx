

export const Forecast = () => {

    return (
        <div>
            <div>
                <span>Forecast</span>
                <span>7 Days</span>
            </div>
            <div className="seven-days">
                <input type="radio" name="weather" id="1" />
                <label htmlFor="1">
                    <div>
                        <img src="" alt="" />
                        24* / 22*
                    </div>
                    <span>25 Jul, Thu</span>
                </label>
            </div>
        </div>
    )
}
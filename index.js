class ThemeSettings {
    constructor() {
        // if instance is created before ? ?
        if (ThemeSettings.instance instanceof ThemeSettings) {
            return ThemeSettings.instance;
        }
        //else create new instance 
        this.themSettingsObject = {
            "color": "blue",
            "font": "300",
            "layout": "flex-box"
        }
        ThemeSettings.instance = this; //instance of the ThemeSettings
    }

}

const s1 = new ThemeSettings();
const s2 = new ThemeSettings();
console.log(s1)
console.log(s2)
console.log(s1 === s2) //the answer should be true since s1 and s2 same object
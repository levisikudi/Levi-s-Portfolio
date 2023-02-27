import React from 'react'

const Skills = () => {
  return (
    <div className='container'>
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3"></i>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-node"></i>
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-git-alt"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-bootstrap"></i>
        <i class="fa-solid fa-terminal"></i>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB40lEQVR4nLXVzUvCYAAG8PfQJboH3fonunTqkpWi9kGUkFmRFdW0tIUGtco+oBILP5iszLLvxD7WWFqwEu2bCPoHunXoGgQRvfEKhnNeNucDz3HPjw32vgCIyPiZbSnwGKgGhYgjNqFrIJW/OIO/cxxXJO/4uaOynqyDao8CNm81w+kLx51s484bZ7Eu0PiNxlF1OzpYt6aEzmvnpiwAFu59TY+j6vf1KUAbrIerd6uKvMbnWaJc66v5H0ftOOhIAahWGn/PCxiKDNxmjqN2HXb+A6jUA9UoGWjN+PbpGsPdPICIES+SxokkUar28j8Pal+kjwe07eh/JAGTrN2cPY46cNLPA1Al/Xw22hLKBZhOMAFA3pCYaAA/MrG5ADNtFgCepGdONDBGW7dzAZazYQHgTrjnRQOTrM2eC8CZEQFAPVAtooHFqLVE46sVAKMMzhtXr2tg6ClUBqTEsNHymQ2MMFYeMEQPfwCpIRj7aDaAHQ/yAFdixQ3ySXvWW2QeFcZwz1fed8Pi1VRF+i5QexVQv9eeGtcEtdB/7zcAOTITJUzoVG0iVRCLYFC5poKu+DIF5MxCbHahf90A/ewSDCaoZ1CIhA+83GVs+60g4yjsacAS5w7vCwZw7G5VMn4UFfPQH1x+rOEeQytpAAAAAElFTkSuQmCC"></img>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACzUlEQVR4nO2WSWhTURSGr/OAoAi1ee//X0JLF1JdCF0qOKAiqAiCoKCbigMiiIoIbiwIIiKK4LRx6RQXoqbnvNJiKy4E7c4uRFGccOGAA1jqUCM3zQtpSNJYo1a8H1zyuLx37/nP+e+5McbhcDgcDofD4XA4qoQ0NEzoqKurveZ5k6O5VDxeL+R89f3FrcAiDYJZVxKJaWYk0WnMWPsr5FMl00J+F+ChkkfF91cK+czOF4yPCnQJcETItSHZkDZm1G8P1GZTgL0KXBCgR4C3NqDrJJS8rcDqlO/PEfJSnpjHRQSki4zXApxTYIPEYjXVCbqmZooA6xW4qMC7UpsLsDkkdwvZHH2rwL4ywT5X4KwCN0us+03I9lZgU0hO/+nA2+LxOgVOKfChkuwJcC+VSMQUuNuZSEzMrEHOFqC7zDc9SXKSfTcViyVC31+RqUDhu0CfkpcVWD6kzdrr66cKcEKBzxWWPTdCcrsCO2y1snZrtpkcQniPAFcVuKXAIwG+lHx3wI47ldxTNHgJgqUlDlxlA+gNg2BJ9nyokBuHvRaLirXiXil5bFDg3U1N4xQ4aRX+8kZAr5DbMvazmw2jklp+/b7Q94Nc8LYnK9kRKRTgpZD3bUsU8usvbHTHVkHJT1WrAPlGgS2Dsq/AGnt47AEstJQ9jBIE84Q8nunb1cwkMyJtdToEOJxtGF1Zi0TvPMm04yDY1ep5c6P7ZljYVibA+Whxa7vc2SFP522ajOb3GzO6jJ/ft3teXIADCrywCRLyhpAHNQhWFUtoVVDf32qtlj9nxdjN7UXUVls7oxIBSvYrecg+h8DCpDFjzJ/CXi7FKhSSy/LnhhCQjppGWzzeZEYiBQL6sxZcF3rezOh2tU0k2dg4/q8Gaq2QewZaCgUI+UCBBWakogMdpcUOa4t8AUKesX+zzUhGC3xt/jXUCXA4HA6Hw+Fw/Hf8AI2c4AVLB6FQAAAAAElFTkSuQmCC"></img>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIUlEQVR4nO2YTYhNYRjHf9c1RilMimsMjexsKAtszE5KiGxm7XPB1pRQFoMFRY2arFhZkEmEEqGMRhSKBWZofDSaxndmwczoqf/VO+eec895771zZzTnV6dpzn2e//l6nud9nhdSUlJSUlJSJg9Tgc3AKeAR8B0YAb4AXUA7sAHIMkGpAfYCb3TjccdbYCeQidBrBn4CF4CGCt1jA3BRuqZfwCKg07nJJ8ABYCUwH5gG1AOrgIPAU8f2NrAg4sKnZfMKqCvzIeqkMyLdApYDA84FLazisK+wBXgtvx5gcYhdLfBQNpeLfL04MvIfkZ7pjqIR+CiDa8As/DD7606ozQmxaXReVAul0SL/AemNwpL1sfMQ2TKKww3pdETYrAeGgd9Ak6d+k/yGpVPADiecfL9EkNlAt/SiQvOIfrcIyCXUzTkRY/6hFaov5sK+bJWelewwsioM+QIRFwHZJPZrnepUagIGMZ1n0rXqFveGW2P0WpN8wTMyshJbSQ5J93A5MY9HTnXpgrZOVJLV0r1XRhVq9KlyH2SYNOmSUi9d6w7iwvBSyLpQ4yzMV5KE/R8ZV7pfykr3V8KV2hZSd6XOdwI9STuBfHsxFvhorwAGZX9Wfwd1vuIX88VXe3egGd1VysXG8kjKDKBfPv36/798kHMBv/OlPMh4kw+rH8Am4JtveOUTrKAdriJuojfrXLNvwufXEav744FbetsCv7X5lOC7Ml5H9Ykbkmp9hrGjMjxG9dlXbEgKaVPMPrYnelfl3ZA1CRrGsMbR/CJ5rofZTmVYopDtjigi8zxa+LBW3vyLDkJ9xYw8JsSXRUqn71Dl7XdTRneA6ZSGbRVdlU6nOtiShqRyhrG5yhMzuqU368NMZxflU8RGnMX6UIkbD8FhbKhYbi0F3utmeoGNCeaAjGb9XvmZ/7Ix2gpKtCWUx36477QuNnvv1+ydU7jkVO3s/AvH9gGwMETTXQ86KrA3kJFO1PrzD0ukPc5bjjusO9gGTInQa1O4HS8j/4KYzgnpBjuCAmoUXie1gWdV7SvwWcncrl2YCbsbn5KSkpKSMqn4C7OqTrF1asWzAAAAAElFTkSuQmCC"></img>
        
        
    </div>
  )
}

export default Skills

{/* <a href="https://icons8.com/icon/tBBf3P8HL0vR/mongodb-a-cross-platform-document-oriented-database-program">MongoDB a cross-platform document-oriented database program icon by Icons8</a> */}
# DEEPL FIXED
So it seems like the development for Agent has stopped at least for now, and unfortunetly agent was left in a state where deepL translation was broken so I fixed it.
This here is a version of agent that has the fixed deepL so you can once again enjoy translations from deepL.

The old version used some outdated way of getting deepL translation so I simply updated it to use the new way to get deepL translations.

## HOW TO FIX AGENT

1. Download the latest version of agent from the official repo: https://github.com/0xDC00/agent/releases/tag/nightly if you haven't already.
2. Download the files from this repo. Now simply replace the 'app' folder in agent with the one from this repo.
3. Navigate to Agent/data/scripts and drag n drop the 'libTranslateDeepL.js' into there, it will ask you to replace with the old one, do it.

## HOW TO GET DEEPL TO WORK
So unfortunately deepL doesn't work out of the box anymore due to changes to DeepL's api. 
Thankfully what you need to do to get it to work is minimal (And free) 

1. Go to https://www.deepl.com/en/pro-api and click 'get started for free'
2. Simply create an account if you haven't already, they will ask for your cards credentials for security reasons, but 
YOU WILL NOT BE CHARGED unless you of course get the paid version.
3. Get your API key from deepL then navigate to your agents install folder and go to data\scripts 
there look for the file you just added "libTranslateDeepL.js" and open it.
4. find the 'const API_KEY = ' area and paste your deepL api key there. 

now deepL should be working once again!

If the original creator of Agent sees this, please do feel free to push this change to the main branch so as many people as possible can get deepL working again!

# Agent
~~Text~~ hooker with javascript.

## Features
- Based on script.
- `scripts repo` with auto updater: [https://github.com/0xDC00/scripts](https://github.com/0xDC00/scripts)
  + Lib: yuzu, vita3k, ppsspp, rpcs3, Unity, MAGES, HCode,...
  + Tons of scripts supporting...
- Minimalistic GUI, configless.
- Command-line support.

## Quickstart
Download: <https://github.com/0xDC00/agent/releases>\
Videos: [https://www.youtube.com/watch?v=dFfuq2UnKjU&list=PLTZXVVG9AT6Sbl1Yg42sxzVAS6IMfnaNH&index=2](https://www.youtube.com/watch?v=dFfuq2UnKjU&list=PLTZXVVG9AT6Sbl1Yg42sxzVAS6IMfnaNH&index=2)
#### Folder Structure
```
agent.exe               <-- GUI
-data
  ├─scripts             <-- user scripts (sync from repo)
  └─user-data           <-- Electron cache
```

## Community
If you have contributions, need support, have suggestions,\
or just want to get in touch with the team, join our [Discord server](https://discord.gg/sWeFsmJYJc)!

Script request?, please open an issue at [scripts repo](https://github.com/0xDC00/scripts/issues)

## Showcase
- [Yuzu] Tsukihime\
  [![Tsukihime Remake](https://img.youtube.com/vi/SD_nO59p0mk/1.jpg)](https://youtu.be/SD_nO59p0mk)
- [Yuzu] Tokimeki Memorial Girl's Side: 4th Heart\
  [![Tokimeki Memorial Girl's Side: 4th Heart](https://img.youtube.com/vi/yvajP5Wtp6U/1.jpg)](https://youtu.be/yvajP5Wtp6U)
- [PC] TyranoScript\
  [![Tyrano](https://img.youtube.com/vi/ZfBEBHd6J7w/1.jpg)](https://youtu.be/ZfBEBHd6J7w)

## Credits
- [Frida](https://github.com/frida/frida)
- [Electron](https://github.com/electron/electron)

## Special Thanks
- People I forgot to add to this list.
- [oleavr](https://github.com/oleavr)
- [sunho](https://github.com/sunho)
- [merry](https://github.com/merryhime)
- [Reishiki](https://www.facebook.com/otomevn)
- [Oblivion](https://discord.com/invite/YE59VVK)

Thank you!

> This fork is a testing ground for the [Perla](https://github.com/AngelMunoz/Perla) Dev Server
> Picking up projects in the wild that already work with npm/node
> is pretty valuable to test and assess which things are missing in Perla.

> Finidings So far
>
> - [Fonts are not loaded correctly in both server and build](https://github.com/AngelMunoz/Perla/issues/32)
> - [The manifest.json is served as a JS module](https://github.com/AngelMunoz/Perla/issues/33)
>   Other than that, it's working smoothly!

# React-Spotify 🎺🎸🎻🎤

> Please visit the original project https://github.com/Pau1fitz/react-spotify

This is `React-Spotify`, a React front end client that communicates with the Spotify API.

If you wish to run the code locally run the following.

```
dotnet tool restore
dotnet perla serve
```

Please note that the Spotify API only provides 30 second audio snippets. It may be possible to get the full track by using the [Web Playback SDK](https://beta.developer.spotify.com/documentation/web-playback-sdk/).

### License

Released under the MIT License.

Check [LICENSE.md](https://github.com/Pau1fitz/react-spotify/blob/master/LICENSE) for more info.

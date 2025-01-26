module.exports = function (api) {
  api.cache(true);  // Кешийг ашиглана
  return {
    presets: ['babel-preset-expo'],  // Expo-ийн Babel preset ашиглана
    plugins: ['nativewind/babel'],   // NativeWind плагин
  };
};

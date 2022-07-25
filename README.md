# react-native-ddd-example

React native example using driven domain design and cqrs.

## Dev enviroment using node 📦

```
cd react-native-ddd-example
npm i
npm run web
```

## Dev enviroment using docker 🐋

```
USER_ID=$(id -u):$(id -g) docker-compose -f docker-compose-dev.yaml build
USER_ID=$(id -u):$(id -g) docker-compose -f docker-compose-dev.yaml up -d

docker exec -it native-container npm i
docker exec -it native-container sh
cd react-native-ddd-example
npm i
npm run web
```

## Open your browser 🚀

[localhost:19006](http://localhost:19006)

## Devs ✒️

- **Jesús Alejandro Yahuitl Rodríguez** - _Dev_ - [YisusYaro](https://github.com/YisusYaro/)

## License 📄

This project is under the License described in the file [LICENSE](LICENSE)

---
⌨️ with ❤️

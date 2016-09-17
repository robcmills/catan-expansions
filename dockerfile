FROM node
RUN npm install -g create-react-app
WORKDIR /src/app
RUN create-react-app dnk
WORKDIR /src/app/dnk
EXPOSE 3000
CMD npm start

FROM node:12.2

COPY package.json package-lock.json $HOME/hostel-booking-app/

WORKDIR $HOME/hostel-booking-app

RUN npm install

COPY . $HOME/hostel-booking-app

CMD ["npm", "start"]
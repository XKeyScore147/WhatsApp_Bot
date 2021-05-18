FROM erdembey/siriuserbot:latest

RUN git clone https://github.com/bodrumlu/Whatimperius /root/Whatsimperius
WORKDIR /root/Whatsİmperius/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

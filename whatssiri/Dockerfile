FROM erdembey/siriuserbot:latest

RUN git clone https://github.com/ErdemBey1/WhatsSiri /root/WhatsSiri
WORKDIR /root/WhatsSiri/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

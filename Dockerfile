FROM node:14

# Create app directory
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# Install YARN and app dependencies
RUN yarn

# Bundle app source
COPY . ./
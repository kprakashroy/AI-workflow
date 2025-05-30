// Basic PostgreSQL + Redis using Sequelize and ioredis

const { Sequelize } = require('sequelize');
const Redis = require('ioredis');

const sequelize = new Sequelize(process.env.DATABASE_URL);
const redis = new Redis(process.env.REDIS_URL);

module.exports = { sequelize, redis };
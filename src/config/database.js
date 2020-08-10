//require('dotenv/config');

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'delivery',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
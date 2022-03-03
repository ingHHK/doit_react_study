const { dirname } = require("path");
const path = require("path");

module.exports = {
    module: {
        rles: [
            {
                test: /\.scss$/,
                loaders: ["sass-loader"],
                include: path.resolve(dirname, "../")
            }
        ]
    }
};
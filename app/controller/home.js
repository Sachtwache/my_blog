'use strict';

const Controller = require('egg').Controller;
const checkAgent = require("../utils/checkagent");
class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        let data = await this.ctx.service.website.getHomePageData();
        await ctx.render("pc/home.html", data)

    }
}

module.exports = HomeController;
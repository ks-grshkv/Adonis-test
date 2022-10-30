'use strict'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class ProfileController {

    public async index({ view, params }: HttpContextContract){
        const user = await User.findBy('id', params.user_id)
        if (!user)
            return view.render('errors.not-found')

        const news  = await user.related('news').query().orderBy('id', 'desc')

        return view.render('profile', {
            news: news,
            author: user.name
          })
    }
}
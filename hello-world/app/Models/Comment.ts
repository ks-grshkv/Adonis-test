import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import News from 'App/Models/News'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public body: string

  // @belongsTo(() => User, {
  // })
  // public user: BelongsTo<typeof User>

  // @column()
  // public userId: number

  @column()
  public newsId: number

  // @belongsTo(() => News, {
  // })
  // public news: BelongsTo<typeof News>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

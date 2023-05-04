import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import User from "./users.entity"
import RealEstate from "./realEstate.entity"

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column({ type: "date" })
  date: Date

  @Column({ type: "time" })
  hour: string

  @ManyToOne(() => User, (user) => user.schedules)
  user: User

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  realEstate: RealEstate
}

export default Schedule

import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import userImg from "../assets/userPic.png"
import { HiTrendingUp, HiTrendingDown } from 'react-icons/hi'
import data from "../assets/data.json"
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from '../components/DashboardTable'

const dashboard = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar/>
      {/* Main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        <section className="widget-container">
          <WidgetItem
            percent={40}
            amount={true}
            value={34000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            heading="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transactions"
            color="rgb(255,196,0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(76 0 255)"
          />
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/*Graph here*/}
            <BarChart
              data_1={[300,144,433, 655, 237, 755, 190]}
              data_2={[200,444,733, 255, 937, 555, 890]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {
                data.categories.map((item)=>(
                  <CategoryItem
                    key={item.heading}
                    heading={item.heading}
                    value={item.value}
                    color={`hsl(${item.value * 4},${item.value}%,50%)`}
                  />
                ))
              }
            </div>
          </div>
        </section>
        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["Female", "male"]}
              data={[12,19]}
              backgroundColor={["hsl(340,82%,56%)","rgba(53,162,235,0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale/>
            </p>
          </div>
          <Table data={data.transaction}/>

        </section>
      </main>
    </div>
  )
}

interface WidgetItemProps{
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount?:boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount=false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp/> +{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown/> {percent}%{" "}
        </span>
      )}
    </div>
    <div className="widget-circle" style={{
      background:`conic-gradient(
        ${color} ${360*Math.abs(percent)/100}deg,
        rgb(255, 255, 255) 0
      )`
    }}>
      <span style={{
        color,
      }}>{percent}%</span>
    </div>
  </article>
)

interface CategoryItemProps{
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({color, value, heading}:CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
)

export default dashboard;
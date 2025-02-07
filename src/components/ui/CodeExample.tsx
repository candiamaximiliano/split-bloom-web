import Code from "@/components/Code"
import {
  RiExchangeDollarLine,
  RiHandCoinLine,
  RiSwap2Line,
  RiUserCommunityLine,
} from "@remixicon/react"
import { Badge } from "../Badge"
import CodeExampleTabs from "./CodeExampleTabs"

const code = `CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    gender CHAR(1),
    rewards_member BOOLEAN
);

CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    sales_date DATE,
    customer_id INT REFERENCES Customers(customer_id)
);

CREATE TABLE Items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10, 2)
);

CREATE TABLE Order_Items (
    order_id INT REFERENCES Orders(order_id),
    item_id INT REFERENCES Items(item_id),
);`

const code2 = `async function fetchCustomerOrders() {
    const result = await prisma.orders.findMany({
        where: {
            customer: {
                name: 'Jack Beanstalk'
            },
            segmentation: {
                type: 'young professional',
                joinedYear: 2024,
                region: 'us-west-01',
            }
        },
        include: {
            customer: true,
            order_items: {
                include: {
                    item: true
                }
            }
        }
    });
    return result;
}`

const features = [
  {
    name: "Dividí gastos fácilmente",
    description:
      "La app hace la matemática por vos y te dice quién debe qué (adiós peleas con tus amigos). 🤝",
    icon: RiSwap2Line,
  },
  {
    name: "Pagos sin olvidos",
    description:
      "Configurá recordatorios o pagos automáticos y recibí alertas antes de que te atrases. ⏰",
    icon: RiHandCoinLine,
  },
  {
    name: "Grupos de gastos",
    description:
      "Armá “workspaces” o grupos para cada amigo, viaje o proyecto. ✈️",
    icon: RiUserCommunityLine,
  },
  {
    name: "Multi-divisa",
    description:
      "¿Pesos, dólares, euros? La app soporta todo y te muestra cuánto gastaste en cada moneda. 🤩",
    icon: RiExchangeDollarLine,
  },
]

export default function CodeExample() {
  return (
    <section
      aria-labelledby="code-example-title"
      className="mx-auto mt-28 w-full max-w-6xl px-3"
    >
      <Badge>Por qué usar Split Bloom</Badge>
      <h2
        id="code-example-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
      >
        Diseñada para hacerte la vida más fácil
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        Split Bloom te ofrece todas las herramientas que necesitás para manejar
        tu plata de forma inteligente y sin complicaciones.
      </p>
      <CodeExampleTabs
        tab1={
          <Code code={code} lang="sql" copy={false} className="h-[31rem]" />
        }
        tab2={
          <Code
            code={code2}
            lang="javascript"
            copy={false}
            className="h-[31rem]"
          />
        }
      />
      <dl className="mt-24 grid grid-cols-4 gap-10">
        {features.map((item) => (
          <div
            key={item.name}
            className="col-span-full sm:col-span-2 lg:col-span-1"
          >
            <div className="w-fit rounded-lg p-2 shadow-md shadow-green-400/30 ring-1 ring-black/5 dark:shadow-green-600/30 dark:ring-white/5">
              <item.icon
                aria-hidden="true"
                className="size-6 text-green-600 dark:text-green-400"
              />
            </div>
            <dt className="mt-6 font-semibold text-gray-900 dark:text-gray-50">
              {item.name}
            </dt>
            <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

import useTitle from "../hooks/useTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Blogs = () => {
    useTitle('Blogs')
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div data-aos="fade-up" >
                <h2 className="text-2xl font-bold pb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <span className="font-bold">Access Token:</span>
                <p><small>An access token is a credential that is used to access protected resources on behalf of a user or an application. It is usually issued by an authentication server after a successful authentication process
                </small></p> <br />
                <span className="font-bold"> Refresh Token:</span>
                <p><small>
                    A refresh token is a long-lived credential that is used to obtain a new access token once the current one expires. Unlike access tokens, refresh tokens are not meant to be used for authentication directly. Instead, they are used to request a new access token without requiring the user to re-enter their credentials.
                </small></p>
            </div>

            <div>
                <h2 className="text-2xl font-bold pb-4">Compare SQL and NoSQL databases?</h2>
                <span className="font-bold">SQL Databases</span>
                <p><small>

                    SQL databases are based on the relational model, which organizes data into tables with predefined schemas and enforces relationships between tables through keys (primary and foreign keys).
                    Data Integrity: SQL databases provide strong data integrity and enforce ACID (Atomicity, Consistency, Isolation, Durability) properties. Transactions ensure data consistency and allow for rollbacks.
                    Query Language: SQL (Structured Query Language) is used to interact with SQL databases. It provides a standardized language for querying, inserting, updating, and deleting data.</small></p> <br />

                <span className="font-bold"> NoSQL Databases</span>
                <p><small>
                    NoSQL databases are designed to handle unstructured or semi-structured data. They use various data models like key-value, document, columnar, or graph to store and retrieve data.
                    Data Flexibility: NoSQL databases offer schema flexibility, allowing for dynamic and evolving data structures. Each record can have a different structure, making it suitable for scenarios with changing requirements.
                    Scalability: NoSQL databases excel at horizontal scalability, making it easier to distribute data across multiple servers or clusters. They can handle large-scale data sets and high read/write workloads. </small></p>
            </div>

            <div>
                <h2 className="text-2xl font-bold pb-4">What is express js? What is Nest JS?</h2>
                <span className="font-bold">Express.js</span>
                <p><small>
                    Express.js is a popular web application framework for Node.js. It provides a simple and minimalist approach to building web servers and APIs. Express.js is known for its unopinionated design, allowing developers to have flexibility and freedom in structuring their applications. </small></p> <br />
                <span className="font-bold">  NestJS</span>
                <p><small>

                    NestJS is a framework for building scalable and efficient server-side applications with TypeScript. It is built on top of Express.js and leverages modern JavaScript features and concepts such as decorators, modules, and dependency injection. NestJS follows the architectural pattern which promotes the use of reusable and loosely coupled modules.</small></p>
            </div>
            <div>
                <h2 className="text-2xl font-bold pb-4">
                What is MongoDB aggregate and how does it work
                </h2>
                <p><small>
                In MongoDB, the aggregate framework is a powerful tool for performing data aggregation operations on collections. It allows you to process and transform data, perform calculations, and obtain aggregated results based on specified criteria. The aggregate framework operates on the concept of a pipeline, where multiple stages are applied sequentially to the data.
                    </small></p>

            </div>


        </div>
    );
};

export default Blogs;
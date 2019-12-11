import React from 'react'
import {
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Slide,
  SlideSet,
  Text,
  Appear,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Link
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import preloader from 'spectacle/lib/utils/preloader'
import ddb from '../assets/Amazon-DynamoDB.svg'
import table1 from '../assets/table-breakdown1.png'
import table2 from '../assets/table-breakdown2.png'
import table3 from '../assets/table-breakdown3.png'
import table4 from '../assets/table-breakdown4.png'
import table5 from '../assets/table-breakdown5.png'
import table6 from '../assets/table-breakdown6.png'
import table7 from '../assets/table-breakdown7.png'
import overload from '../assets/partition-overloading.png'
import indexes from '../assets/indexes.png'
import indexOverload from '../assets/index-overloading.png'
import indexOverload1 from '../assets/index-overload1.png'
import indexOverload2 from '../assets/index-overload2.png'
import perf from '../assets/perf-at-scale.png'


preloader(images)

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

const noTransition = (transitioning, forwarding) => {}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary" align="center center">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Amazon DynamoDB
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            Desining a distributed database for efficency and scale
          </Text>
          <Image margin="10px auto 0" src={ddb} width="30%" className="center" />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} caps textColor="secondary">
            Outline
          </Heading>
          <List>
            <ListItem>NoSQL</ListItem>
            <ListItem>What is it?</ListItem>
            <ListItem>How does it work?</ListItem>
            <ListItem>Table Design</ListItem>
            <ListItem>Performance</ListItem>
            <ListItem>Data Modeling</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={2} textColor="primary">
            NoSQL
          </Heading>
          <Appear fid="1">
            <Text textColor="primary">Simply, its any non-relational database</Text>
          </Appear>
          <Appear fid="2">
            <Text textColor="primary">Built for specific data models</Text>
          </Appear>
          <Appear fid="3">
            <Text textColor="primary">Flexiable schemas</Text>
          </Appear>
          <Appear fid="4">
            <Text textColor="primary">Performance at scale</Text>
          </Appear>
          <Notes>
            NoSQL doesnt work for everything. Only really for applications that repeatable access patterns. Not for
            exploring and maybe needing to do a weird random combo of data every once and a blue moon.
          </Notes>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="tertiary">
            Why NoSQL?
          </Heading>
          <Table>
            <TableHeader>
              <TableRow bold>
                <TableHeaderItem />
                <TableHeaderItem>SQL</TableHeaderItem>
                <TableHeaderItem>NoSQL</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem bold>Optimized for</TableItem>
                <TableItem>compute</TableItem>
                <TableItem>storage</TableItem>
              </TableRow>
              <TableRow>
                <TableItem bold>Query type</TableItem>
                <TableItem>ad hoc</TableItem>
                <TableItem>views</TableItem>
              </TableRow>
              <TableRow>
                <TableItem bold>Scaling</TableItem>
                <TableItem>vertical ↕</TableItem>
                <TableItem>horizontal ↔</TableItem>
              </TableRow>
              <TableRow>
                <TableItem bold>Processing</TableItem>
                <TableItem>OLAP (DW)</TableItem>
                <TableItem>OLTP (GSMS)</TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Notes>
            Rleational is really good when you dont know what data is there and how it relates to anything else. If you
            have a defined buisness pratice or access pattern, then NoSQL is a much better fit for your database. One of
            the most relevant technologies that you can learn right now.
          </Notes>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            Amazon DynamoDB
          </Heading>
          <List>
            <ListItem>Key/value store or wide column database</ListItem>
            <Appear>
              <div>
                <ListItem>
                  Sub 10 ms performance at <span style={{ fontWeight: 'bold' }}>ANY</span> scale 😮
                </ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem>
                  Multi-region <span style={{ fontWeight: 'bold' }}>AND</span> multi-master 😲
                </ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem>Peaks at more than 20M RPS 🤯</ListItem>
              </div>
            </Appear>
          </List>
          <Notes>Amazon.com tables did 54M RPS over Prime day. Shattered the records over BF/Cyber Monday</Notes>
        </Slide>
        <SlideSet>
          <Slide bgColor="secondary" transition={[noTransition]}>
            <Heading size={2} textColor="primary">
              Forget everything you think you know about databases
            </Heading>
            <Notes>
              Its not hard to learn NoSQL, but you have to begin thinking about your data differently in order to make
              use of it. We currently understsand relational really well, but gotta think differently to move onto the
              next phase of things.
            </Notes>
          </Slide>
          <Slide bgColor="secondary" transition={[noTransition]}>
            <Heading size={5} textColor="primary">
              DynamoDB Table
            </Heading>
            <Image src={table1} />
            <Notes>A table is an object repository. Its where the items go.</Notes>
          </Slide>
          <Slide bgColor="secondary" transition={[noTransition]}>
            <Heading size={5} textColor="primary">
              DynamoDB Table
            </Heading>
            <Image src={table2} />
            <Notes>Items</Notes>
          </Slide>
          <Slide bgColor="secondary" transition={[noTransition]}>
            <Heading size={5} textColor="primary">
              DynamoDB Table
            </Heading>
            <Image src={table3} />
            <Notes>All items must have at least one attribute.</Notes>
          </Slide>
          <Slide bgColor="secondary" transition={[noTransition]}>
            <Heading size={5} textColor="primary">
              DynamoDB Table
            </Heading>
            <Image src={table4} />
            <Notes>
              Partition Key -- unique. Enables k/v lookups. Give me item x => here it is. This is what MongoDB does with
              the '_id' attribute.
            </Notes>
          </Slide>
          <Slide bgColor="secondary" transition={[noTransition]}>
            <Heading size={5} textColor="primary">
              DynamoDB Table
            </Heading>
            <Image src={table5} />
            <Notes>
              Wide column DBs adds in the sort key concept. Uniqueliy identified the item inside the collection/grouping
              of that partition key. Doesnt have to be homogoneous collections of items. Can be collections of many
              different types of items. Will talk more about this later.
            </Notes>
          </Slide>
          <Slide bgColor="secondary" transition={[noTransition]}>
            <Heading size={5} textColor="primary">
              DynamoDB Table
            </Heading>
            <Image src={table6} />
            <Notes>Use range queries to selectively get items out of that partition.</Notes>
          </Slide>
          <Slide bgColor="secondary" transition={[noTransition]}>
            <Heading size={5} textColor="primary">
              DynamoDB Table
            </Heading>
            <Image src={table7} />
            <Notes>
              Add indexes on other attributes to allow for new access patterns for the buisness. Its not that we cant
              join objects, the are modeled differently.
            </Notes>
          </Slide>
        </SlideSet>
        <Slide transition={['zoom']}bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Partition Overloading
          </Heading>
          <Image margin="20px auto 0" fill src={overload} />
          <List>
            <ListItem>Generic names for partition and sort key</ListItem>
            <ListItem>Multiple data types stored in one partition</ListItem>
            <Appear>
              <div>
                <ListItem>One query gets you everything about a customer</ListItem>
              </div>
            </Appear>
          </List>
          <Notes>
            Curx of NoSQL table design. Create collections of objects that can be fetched with one query. Dont have to
            traverse multiple tables to fetch all the data. There is no customer metadata table, no items table, no
            orders table. It all lives in the same place.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Partition Overloading
          </Heading>
          <Image margin="20px auto 0" fill src={overload} />
          <List>
            <ListItem>SK consist of hierarchies of data</ListItem>
            <ListItem>
              <code>2019-11-29T08:31:28#O1#I1</code>
            </ListItem>
            <Appear>
              <div>
                <ListItem>
                  <code>SELECT * WHERE PK=Customer_1 AND SK > 2019-10-29</code>
                </ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem>
                  <code>SK beginsWith(2019-11-29T08:31:28#O1)</code>
                </ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem>
                  <code>SK beginsWith(2019-11-29)</code>
                </ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem>
                  <code>SK beginsWith(2019-11)</code>
                </ListItem>
              </div>
            </Appear>
          </List>
          <Notes>Items</Notes>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">
            Indexes
          </Heading>
          <Image margin="20px auto 0" fill src={indexes} />
          <List>
            <ListItem>Support secondary access patterns</ListItem>
            <ListItem>💯% SLA guarantee on index replication</ListItem>
            <ListItem>Eventually consistant (p99 latency = 10 ms)</ListItem>
            <ListItem>Read/write capacity provisioned seperately</ListItem>
          </List>
          <Notes>
            Table that is replicated and changed as you update data on the parent table. Projections: some (vales needed
            for access pattern), all (double storage cost, double insert cost), none (does the item exist). Increasing
            the storage cost/data duplication.
          </Notes>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor="primary">
            Index Overloading
          </Heading>
          <Image margin="20px auto 0" fill src={indexOverload2} />
          <List>
            <ListItem>Generic key names enable multiple access patterns</ListItem>
          </List>
          <Notes>
            Dont want to use 2 GSIs cuz then you have 2x capacity, 2x storage, alarms, etc. Access patterns prob arent
            happening at the same time, so you can use excess capacity for the other query.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor="primary">
            Index Overloading
          </Heading>
          <Image margin="20px auto 0" fill src={indexOverload1} />
          <List>
            <ListItem>
              <code>SELECT * WHERE PK=ONLINE AND SK=US</code>
            </ListItem>
          </List>
          <Notes>Prefix item with the item type if youre worried about collisions.</Notes>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor="primary">
            Index Overloading
          </Heading>
          <Image margin="20px auto 0" fill src={indexOverload2} />
          <List>
            <ListItem>
              <code>SELECT * WHERE PK=AISN_NUMBER AND SK=PROCESSING</code>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">
            Performance at scale
          </Heading>
          <Image margin="20px auto 0" fill src={perf} />
          <List>
            <ListItem>Elastic is the new normal</ListItem>
            <ListItem>Burst bucket capacity for 5 minutes</ListItem>
          </List>
          <Notes>
            This happens because the router fleet caches all of the IAM data, data layer location stuff on the router
            node.
          </Notes>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">
            Data Modeling
          </Heading>
          <Text textColor="primary">Rick can explain this much better than I can.</Text>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">
            Data Modeling
          </Heading>
          <iframe
            width="1000"
            height="563"
            src="https://youtube.com/embed/6yqfmXiZTlM?start=1530"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary" textColor="primary">
          <Heading size={1} caps textColor="primary">
            Questions?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} caps textColor="tertiary">
            More information
          </Heading>
          <List>
            <ListItem>
              <Link href={'https://aws.amazon.com/dynamodb/'}>📃 Amazon DynamoDB</Link>
            </ListItem>
            <ListItem>
              <Link href={'https://www.youtube.com/watch?v=6yqfmXiZTlM'}>📺 Amazon DynamoDB Deep Dive</Link>
            </ListItem>
            <ListItem>
              <Link href={'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html'}>
                📃 Amazon DynamoDB Best Pratices
              </Link>
            </ListItem>
            <ListItem>
              <Link href={'https://aws.amazon.com/nosql/'}>📃 NoSQL</Link>
            </ListItem>
            <ListItem>
              <Link href={'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-modeling-nosql-B.html'}>
                📃 Modeling NoSQL
              </Link>
            </ListItem>
            <ListItem>
              <Link href={'https://twitter.com/houlihan_rick'}>🐤 Rick Houlihan</Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    )
  }
}

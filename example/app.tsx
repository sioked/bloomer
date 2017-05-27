import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';

import {
    Tabs,
    Tab,
    TabList,
    TabLink,

    Message,
    MessageBody,
    MessageHeader,

    Pagination,
    PageControl,
    Page,
    PageList,
    PageLink,

    Menu,
    MenuLabel,
    MenuLink,
    MenuList,

    Box,

    Button,

    Field,
    Control,

    Content,

    Columns,
    Column,
    Tile,

    Delete,

    Container,

    Section,
} from './../src/index';

ReactDOM.render(
    <section className='section'>
        <Container isFluid>
            <Section>
                <Columns>
                    <Column IsOffsetHalf>
                        <p className="notification is-info">Content</p>
                    </Column>
                    <Column>
                        <p className="notification is-danger">...rest</p>
                    </Column>
                </Columns>
            </Section>

            <Section>
                <Tabs isCentered>
                    <TabList>
                        <Tab>
                            <TabLink>Pictures</TabLink>
                        </Tab>
                        <Tab isActive>
                            <TabLink>Music</TabLink>
                        </Tab>
                        <Tab>
                            <TabLink>Videos</TabLink>
                        </Tab>
                        <Tab>
                            <TabLink render={props => (<a {...props}>Documents</a>)} />
                        </Tab>
                    </TabList>
                </Tabs>
            </Section>

            <Section>
                <Pagination>
                    <PageControl isPrevious disabled title="Sup nigga" render={props => <a {...props}>Previous</a>} />
                    <PageControl isNext>Next</PageControl>
                    <PageList>
                        <Page>
                            <PageLink>1</PageLink>
                        </Page>
                        <Page>
                            <PageLink className='is-current'>2</PageLink>
                        </Page>
                        <Page>
                            <PageLink render={props => (<a {...props}>3</a>)} />
                        </Page>
                        <Page>
                            <PageLink isCurrent>4</PageLink>
                        </Page>
                    </PageList>
                </Pagination>
            </Section>

            <Section>
                <Box>Hello World</Box>
            </Section>

            <Section>
                <Field isGrouped>
                    <Control isLoading>
                        <Button isFlexDesktopOnly>This is a Button</Button>
                    </Control>
                    <Control>
                        <Button isPrimary>This is a Primary Button</Button>
                    </Control>
                    <Control>
                        <Button isSuccess>Success ;)</Button>
                    </Control>
                    <Control>
                        <Button isBlack isLoading render={(props) => <a {...props}>black magic</a>} />
                    </Control>
                </Field>
            </Section>

            <Section>
                <Content isMedium>
                    <ul>
                        <li>This</li>
                        <li>is</li>
                        <li>a</li>
                        <li>Content</li>
                        <li>list</li>
                    </ul>
                </Content>
            </Section>

            <Section>
                <Menu>
                    <MenuLabel>General</MenuLabel>
                    <MenuList>
                        <li><MenuLink>Dashboard</MenuLink></li>
                        <li><MenuLink>Customers</MenuLink></li>
                    </MenuList>
                    <MenuLabel>Administration</MenuLabel>
                    <MenuList>
                        <li><MenuLink>Team Settings</MenuLink></li>
                        <li>
                            <MenuLink isActive>Manage Your Team</MenuLink>
                            <ul>
                                <li><MenuLink>Members</MenuLink></li>
                                <li><MenuLink>Plugins</MenuLink></li>
                                <li><MenuLink>Add a member</MenuLink></li>
                            </ul>
                        </li>
                        <li><MenuLink>Invitations</MenuLink></li>
                        <li><MenuLink>Cloud Storage Environment Settings</MenuLink></li>
                        <li><MenuLink>Authentication</MenuLink></li>
                    </MenuList>
                    <MenuLabel>Transactions</MenuLabel>
                    <MenuList>
                        <li><MenuLink>Payments</MenuLink></li>
                        <li><MenuLink>Transfers</MenuLink></li>
                        <li><MenuLink>Balance</MenuLink></li>
                    </MenuList>
                </Menu>
            </Section>

            <Section>
                <Message>
                    <MessageHeader>
                        <p>Hello World</p>
                        <Delete />
                    </MessageHeader>
                    <MessageBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                    </MessageBody>
                </Message>
            </Section>
        </Container>
    </section>,
    document.getElementById('root')
);
import { Dropdown, Typography, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { catagorys } from "../assets/consts";
import { fetchGames } from "../features/games/gamesSlise";

let catagoryItems = [];

catagorys.map(cat => catagoryItems = catagoryItems.concat({
    key: cat,
    label: cat
}))

const platformItems = [
    {
      key: 'pc',
      label: 'Pc',
    },
    {
      key: 'browser',
      label: 'Browser',
    },
    {
      key: 'all',
      label: 'All',
    },
];
const sortByItems = [
    {
      key: 'release-date',
      label: 'Release-date',
    },
    {
      key: 'popularity',
      label: 'Popularity',
    },
    {
      key: 'alphabetical',
      label: 'Alphabetical',
    },
    {
      key: 'relevance',
      label: 'Relevance',
    },
];

const setFilter = (e) => {
    console.log(e);
    // fetchGames('', e.key, '')
}

function  Filters() { 
    return (
        <>
            <div style={{display: "flex"}}>
                <div style={{marginRight: 15, minWidth: 80}}>
                    <Dropdown
                        menu={{
                        items: catagoryItems,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                        onClick: (e) => setFilter(e)
                        }}
                    >
                        <Typography.Link>
                            <Space>
                                Category
                                <DownOutlined />
                            </Space>
                            </Typography.Link>
                    </Dropdown>
                </div>
                <div style={{marginRight: 15, minWidth: 80}}>
                    <Dropdown
                        menu={{
                        items: platformItems,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                        onClick: (e) => setFilter(e)
                        }}
                    >
                        <Typography.Link>
                            <Space>
                                Platform
                                <DownOutlined />
                            </Space>
                            </Typography.Link>
                    </Dropdown>
                </div>
                <div style={{marginRight: 15, minWidth: 80}}>
                    <Dropdown
                        menu={{
                        items: sortByItems,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                        onClick: (e) => setFilter(e)
                        }}
                    >
                        <Typography.Link>
                            <Space>
                                Sort by
                                <DownOutlined />
                            </Space>
                            </Typography.Link>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}

export { Filters };
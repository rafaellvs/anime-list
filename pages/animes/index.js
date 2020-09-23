import { useEffect, useState } from 'react'
import { Table, Typography } from 'antd'
import { useRouter } from 'next/router'

import { columns, generateDataSource } from '../../helpers/table-data'

import { fetchAnimes } from '../../helpers/api'

import Layout from '../../components/Layout'

const Animes = () => {
  const router = useRouter()
  const { Title } = Typography

  const [data, setData] = useState(null)
  const [dataSource, setDataSource] = useState(null)
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 })
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = current => {
    setIsLoading(true)
    fetchAnimes(current)
      .then(res => res.json())
      .then(res => {
        setPagination({
          ...pagination,
          current: current || pagination.current,
          total: res.meta.count - pagination.pageSize,
        })
        setData(res.data)
        setIsLoading(false)
      })
  }

  // fetch on Table navigation
  const handleTableChange = event => {
    fetchData(event.current)
  }

  // fetch data on mount
  useEffect(() => {
    fetchData()
  }, [])

  // setDataSource on new fetches
  useEffect(() => {
    data &&
    setDataSource(generateDataSource(data))
  }, [data])

  return (
    <Layout>
      <div>
        <Title>Animes</Title>

        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={pagination}
          loading={isLoading}
          onChange={handleTableChange}
          onRow={row =>
            ({ onClick: () => router.push(`animes/${row.key}`) })
          }
        />
      </div>
    </Layout>
  )
}

export default Animes

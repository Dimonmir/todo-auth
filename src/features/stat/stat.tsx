import { ITypeTodo } from '@/shared/store/todoSlice';
import { ToDoItem } from '../todoItem/todoItem';
import { Card, Statistic, Typography } from 'antd';
import {
  ArrowUpOutlined,
  CheckCircleOutlined,
  FormOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { CBox, SBox } from './s-stat';
import { useAppSelector } from '@/shared/store/redux';
import estimate from '@/shared/estimate/estimate';

function getProc(all: number, count: number) {
  return (count * 100) / all;
}

export const Stat = () => {
  const todos = useAppSelector((state) => state.todos);

  let discription = {
    doneCount: 0,
    doneProc: 0,
    pastCount: 0,
    pastProc: 0,
    workCount: 0,
    workProc: 0,
    all: 0,
  };

  todos.todosArr.map((item) => {
    discription.all++;
    if (item.completed) {
      discription.doneCount++;
    } else if (estimate(item.dataEnd)) {
      discription.pastCount++;
    } else {
      discription.workCount++;
    }
  });

  discription.doneProc = getProc(discription.all, discription.doneCount);
  discription.workProc = getProc(discription.all, discription.workCount);
  discription.pastProc = getProc(discription.all, discription.pastCount);

  return (
    <CBox>
      <Typography.Title level={4}>Количество задач</Typography.Title>
      <SBox>
        <Card bordered={false}>
          <Statistic
            title={
              <>
                Выполненные задачи. <br /> Всего {discription.doneCount}
              </>
            }
            value={discription.doneProc}
            precision={2}
            valueStyle={{ color: 'green' }}
            prefix={<CheckCircleOutlined />}
            suffix="%"
          />
        </Card>
        <Card bordered={false}>
          <Statistic
            title={
              <>
                Просроченные задачи. <br /> Всего {discription.pastCount}
              </>
            }
            value={discription.pastProc}
            precision={2}
            valueStyle={{ color: 'red' }}
            prefix={<WarningOutlined />}
            suffix="%"
          />
        </Card>
        <Card bordered={false}>
          <Statistic
            title={
              <>
                Текущие задачи. <br /> Всего {discription.workCount}
              </>
            }
            value={discription.workProc}
            precision={2}
            valueStyle={{ color: 'blue' }}
            prefix={<FormOutlined />}
            suffix="%"
          />
        </Card>
      </SBox>
    </CBox>
  );
};

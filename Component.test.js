import { render, fireEvent } from '@testing-library/vue'
import DrinkCard from '@/components/DrinkCard.vue'
import OrderBill from '@/components/OrderBill.vue'
import VolumePills from '@/components/VolumePills.vue'
import CheckoutModal from '@/components/CheckoutModal.vue'
import { test } from 'vitest'

test('測試將props傳入orderBill中是否有渲染出畫面', () => {
  const { getByText } = render(OrderBill, {
    props: {
      orderBills: [{
        id: 1,
        name: 'Black Tea',
        ice: 'Regular Ice',
        sugar: 'No Sugar',
        price: 30
      }]
    }
  })

  getByText('Black Tea')
  getByText('Regular Ice')
  getByText('No Sugar')
  getByText('30')
})

test('測試將props傳入DrinkCard中是否有渲染', () => {
  const { getByText } = render(DrinkCard, {
    props: {
      drinks: [{
        id: 2,
        name: 'Oolong Tea',
        price: 30
      }]
    }
  })

  getByText('Oolong Tea')
})

test('測試將props傳入VolumePills中是否有渲染', () => {
  const { getByLabelText } = render(VolumePills, {
    props: {
      choice: {
        name: 'Ice',
        labelOutline: 'btn-outline-primary',
        choice: [{
          id: 1,
          value: 'No Ice',
          choiceName: 'No',
          isChecked: false
        }, {
          id: 2,
          value: 'Less Ice',
          choiceName: 'Less',
          isChecked: false
        }, {
          id: 3,
          value: 'Regular Ice',
          choiceName: 'Regular',
          isChecked: true
        }]
      }
    }
  })

  getByLabelText('No')
  getByLabelText('Less')
  getByLabelText('Regular')
})

test('測試將props傳入CheckoutModal中是否有渲染', () => {
  const { getByText } = render(CheckoutModal, {
    props: {
      total: 30
    }
  })

  getByText('Total amount of drinks： $')
  getByText('30')
})
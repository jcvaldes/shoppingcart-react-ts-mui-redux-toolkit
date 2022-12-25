import React from 'react'
import {
  Button,
  Card as CardMui,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setItem } from '../../utils/localStorage'
import { addToCart } from '../../redux/slices'

type CardProps = {
  image: string
  name: string
  species: string
  status: string
  id: number
}

export const Card: React.FC<CardProps> = ({
  image,
  name,
  species,
  status,
  id
}) => {
  const [disabledBtn, setDisabledBtn] = React.useState<boolean>(false)
  let navigate = useNavigate()
  const dispatch = useAppDispatch()

  const itemExist = useAppSelector((state) => state.cartReducer)

  React.useEffect(() => {
    setDisabledBtn(itemExist.some((item) => item.id === id))
    setItem('cart', itemExist)
  }, [itemExist, id])

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        image,
        info: status
      })
    )
  }
  return (
    <CardMui>
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="h4" sx={{ mb: 1.5 }}>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Especie: {species}</Typography>
        <Typography sx={{ mt: 1.5 }}>Estado: {status}</Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate(`/character/${id}`)}
        >
          Learn More
        </Button>
        <Button
          fullWidth
          variant="outlined"
          size="small"
          disabled={disabledBtn}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </CardMui>
  )
}

## Getting Started

First, run the development server:

```bash
yarn install
yarn start
```

Open [http://localhost:4000/](http://localhost:4000/) with your browser to open the graphql playground.

## Learn More
Inside the playground, you can see the examples about queries that using in client project.

### Query to Search the product

```
query Search ($input: ProductInput)  {
  search(input: $input)  {
    id
    title
    condition
    price
    thumbnail
    address {
      state_name
    }
    shipping {
      free_shipping
    }
  }
}
```

```
{
	"input": {
    "query": "Apple"
  }
}
```


### Query to get the product details

```
query Product ($input: ProductInputId)  {
  product(input: $input)  {
    id
    title
		price
		permalink
		thumbnail
    sold_quantity
    condition
    description {
      plain_text
      text
    }
    pictures {
			id
			url
      size
			secure_url
			max_size
			quality
    }
  }
}
```

```
{
	"input": {
    "id": "MLA651109954"
  }
}
```

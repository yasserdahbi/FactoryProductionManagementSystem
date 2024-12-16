const { v4: uuidv4 } = require('uuid')
const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })

const dynamoDb = new AWS.DynamoDB.DocumentClient()
const dynamoDbb = new AWS.DynamoDB()


const TABLE_NAME = 'productsTable'

const params = {
  TableName: 'productsTable',
  KeySchema: [
    { AttributeName: 'id', KeyType: 'HASH' }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'S' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
}

dynamoDbb.describeTable({ TableName: TABLE_NAME }, (err, data) => {
    if (err && err.code === 'ResourceNotFoundException') {
      // Create table if doesn't exist
      console.log(`La table "${TABLE_NAME}" doesn't exist. Creation ...`);
      dynamoDbb.createTable(params, (err, data) => {
        if (err) {
          console.error('Error while creating the table : ', JSON.stringify(err, null, 2));
        } else {
          console.log('Table created successfully:', JSON.stringify(data, null, 2));
        }
      });
    } else if (err) {
      // Autre erreur lors de la vérification de l'existence de la table
      console.error('Error while verifying the table', JSON.stringify(err, null, 2));
    } else {
      // La table existe déjà
      console.log(`The table "${TABLE_NAME}" already exists.`);
    }
  });

// Exemple de production steps à inclure dynamiquement
const productionSteps = [
  {
    id: uuidv4(),
    number: 1,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Check bom (sourcing) and stock(package material, molded casing, spring)',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 2,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Order components in NL',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 3,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Order Sunrise_NDIR_CO2 sensor - not yet ordered (quotation)',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 4,
    createdAt: new Date(),
    state: 'In progress',
    description:
      'Order MLX sensors (MLX90614ESF-BBA-000-SP, MLX90640ESF-BAA-000-TU) - ordered 2 weeks lead time',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 5,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Order PIR sensor (EKMC1691111) - backordered, deliver on 5/24',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 6,
    createdAt: new Date(),
    state: 'In progress',
    description:
      'Ship to factory (from NL). First shipment (DHL # 8999433520) - delivered. Second shipment',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 7,
    createdAt: new Date(),
    state: 'In progress',
    description:
      'Order components in China - delivered. Backup noise sensor +50pcs ( only noise sensor with its own pins ). Backup Satellite PCB +50pcs ( board and assembly ). PIR LED ( NOT Ring LED ) ',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 8,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Order and pay PCB / SMT mounting / Testing',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 9,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Production file confirmation',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 10,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Bare PCB production',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 11,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Receive material and do inspection',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 12,
    createdAt: new Date(),
    state: 'In progress',
    description: 'SMT mounting  (MS-DC, MS-KSZ, MS-T)',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 13,
    createdAt: new Date(),
    state: 'In progress',
    description: 'SMT mounting  (MS-S, MS-MLX)',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 14,
    createdAt: new Date(),
    state: 'In progress',
    description: 'TP2 - continuity test + repair. Post assembly',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 15,
    createdAt: new Date(),
    state: 'In progress',
    description: 'TP3 - continuity test + repair',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 16,
    createdAt: new Date(),
    state: 'In progress',
    description: 'TP4S - sensor module test + repair',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 17,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Assemble in enclosure',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 18,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Update label printing software at factory @label terminal indicator',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 19,
    createdAt: new Date(),
    state: 'In progress',
    description: 'TP5 - software test + repair',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 20,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Order parts for TP6 test table conversion',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 21,
    createdAt: new Date(),
    state: 'In progress',
    description: 'TP6 test table conversion ( depends on https://app.clickup.com/t/86bx1xmk8 )',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 22,
    createdAt: new Date(),
    state: 'In progress',
    description: 'TP6 - power cycle test',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 23,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Spring installation issue  - https://app.clickup.com/t/86bxbpk0e',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 24,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Packaging and packing',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 25,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Ship to international forwarder',
    expectedEndDate: '',
    actualEndDate: '',
  },
  {
    id: uuidv4(),
    number: 26,
    createdAt: new Date(),
    state: 'In progress',
    description: 'Ship to VTEC',
    expectedEndDate: '',
    actualEndDate: '',
  },
]

exports.getAllProducts = async (req, res) => {
  const params = { TableName: TABLE_NAME }
  try {
    const data = await dynamoDb.scan(params).promise()
    res.json(data.Items)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' })
  }
}

exports.getProductById = async (req, res) => {
  const { id } = req.params
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  }
  try {
    const data = await dynamoDb.get(params).promise()
    res.json(data.Item)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' })
  }
}

exports.getBatch = async (req, res) => {
  const { id, batchNumber } = req.params

  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  }

  try {
    const data = await dynamoDb.get(params).promise()
    const product = data.Item

    if (!product || !product.batches) {
      return res.status(404).json({ error: 'Product or batch not found' })
    }

    const batch = product.batches.find((b) => b.number === parseInt(batchNumber))

    if (!batch) {
      return res.status(404).json({ error: 'Batch not found' })
    }

    res.json(batch)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch batch' })
  }
}

exports.createProduct = async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ error: 'Product ID is required' })
  }

  const product = {
    name: req.body.name,
    id: req.body.id, 
    currentReleaseLink: req.body.currentReleaseLink,
    createdAt: new Date().toISOString(),
    batchesNumber: req.body.batchesNumber || 0, 
    imageUrl: req.body.imageUrl || 'https://example.com/default-image.png',
    batches: req.body.batches || [], 
  }

  const params = {
    TableName: 'productsTable',
    Item: product,
  }

  try {
    await dynamoDb.put(params).promise()
    res.status(201).json(product)
  } catch (error) {
    console.error('Error creating product:', error)
    res.status(500).json({ error: 'Failed to create product' })
  }
}

exports.addBatchToProduct = async (req, res) => {
    const { id } = req.params;
    const batch = { ...req.body, id: uuidv4(), steps: [] };
  
    const updateParams = {
      TableName: TABLE_NAME,
      Key: { id },
      UpdateExpression: `
        SET 
        batches = list_append(if_not_exists(batches, :emptyList), :batch),
        batchesNumber = batchesNumber + :increment
      `,
      ExpressionAttributeValues: {
        ':batch': [batch],
        ':emptyList': [],
        ':increment': 1  
      },
      ReturnValues: 'UPDATED_NEW',
      ConditionExpression: 'attribute_exists(id)' 
    };
  
    try {
      const data = await dynamoDb.update(updateParams).promise();
      res.json(data.Attributes);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add batch to product' });
    }
  };
  
exports.addNextStep = async (req, res) => {
  const { id, batchNumber } = req.params
  const { stepNumber } = req.body
  const step = productionSteps[stepNumber - 1]

  const params = {
    TableName: TABLE_NAME,
    Key: { id },
    UpdateExpression: `SET batches[${batchNumber - 1}].steps = list_append(if_not_exists(batches[${
      batchNumber - 1
    }].steps, :emptyList), :step)`,
    ExpressionAttributeValues: {
      ':step': [step],
      ':emptyList': [],
    },
    ReturnValues: 'UPDATED_NEW',
  }

  try {
    const data = await dynamoDb.update(params).promise()
    res.json({ message: 'Step added', step })
  } catch (error) {
    res.status(500).json({ error: 'Failed to add step to batch' })
  }
}

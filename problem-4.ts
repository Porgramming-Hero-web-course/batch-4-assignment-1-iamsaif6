{
  type Circle = { shape: 'circle'; radius: number };
  type Rectangle = { shape: 'rectangle'; width: number; height: number };

  function calculateShapeArea(shape: Circle | Rectangle): number | string {
    if (shape.shape === 'circle') {
      return Math.PI * shape.radius ** 2;
    } else if (shape.shape === 'rectangle') {
      return shape.width * shape.height;
    } else {
      return 'Invalid shape';
    }
  }

  const circle: Circle = { shape: 'circle', radius: 5 };
  const rectangle: Rectangle = { shape: 'rectangle', width: 7, height: 3 };

  console.log(calculateShapeArea(circle));
  console.log(calculateShapeArea(rectangle));
}

/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/voorrang.js":
/*!*************************!*\
  !*** ./src/voorrang.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// eslint-disable-next-line @typescript-eslint/no-var-requires
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

(function () {
    CanvasFunctions = {
        getMousePos: function (canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top,
            };
        },
    };

    // function rotateAndPaintImage(context, image, angleInRad, positionX, positionY, axisX, axisY) {
    //     context.translate(positionX, positionY);
    //     context.rotate(angleInRad);
    //     context.drawImage(image, -axisX, -axisY);
    //     context.rotate(-angleInRad);
    //     context.translate(-positionX, -positionY);
    // }

    /*
env 	Target canvas
img 	Specifies the image, canvas, or video element to use 	 	
sx 	Optional. The x coordinate where to start clipping 	Play it �	
sy 	Optional. The y coordinate where to start clipping 	Play it �	
swidth 	Optional. The width of the clipped image 	Play it �	
sheight 	Optional. The height of the clipped image 	Play it �	
x 	The x coordinate where to place the image on the canvas 	Play it �	
y 	The y coordinate where to place the image on the canvas 	Play it �	
width 	Optional. The width of the image to use (stretch or reduce the image) 	Play it �	
height 	Optional. The height of the image to use (stretch or reduce the image)
*/
    function LoadImageToCanvas(env, imageObj, positionX, positionY, angleInRad, axisX, axisY) {
        env.translate(positionX, positionY);
        env.rotate(angleInRad);
        env.drawImage(imageObj, -axisX, -axisY);
        env.rotate(-angleInRad);
        env.translate(-positionX, -positionY);
    }

    function Wheel(yoffset, xoffset, parent) {
        this.parent = parent;
        this.xoffset = xoffset;
        this.yoffset = yoffset;
        this.length = 10;
        this.maxAngle = Math.PI * 0.35;
        this.minAngle = -Math.PI * 0.35;

        this.heading = 0;
        this.vr = 0; //Rotational speed
        this.boundTo = [];

        this.bindTo = function (obj) {
            this.boundTo.push(obj);
        };

        this.rotateTo = function (newHeading) {
            this.heading = newHeading;
            for (index in this.boundTo) {
                this.boundTo[index].rotateTo(newHeading);
            }
        };

        this.increment = function (value) {
            this.rotateTo(value);
            //this.rotateTo( Math.max( Math.min(this.heading + value, this.maxAngle), this.minAngle))
        };

        this.frontCoord = new Coord();
        this.backCoord = new Coord();

        this.render = function (env) {
            env.lineWidth = 5;
            env.strokeStyle = "#222222";
            this.alpha = this.heading + this.parent.heading;
            //Calculate the center coordinates of the wheel
            this.center = this.parent.getPosition(this.xoffset, this.yoffset);

            //Calculate the coordinates of the front and back of the car :)
            xOffset = Math.sin(this.alpha) * 0.5 * this.length;
            yOffset = Math.cos(this.alpha) * 0.5 * this.length;

            this.frontCoord.x = xOffset + this.center.x;
            this.frontCoord.y = yOffset + this.center.y;
            this.backCoord.x = this.center.x - xOffset;
            this.backCoord.y = this.center.y - yOffset;

            env.beginPath();
            env.moveTo(this.frontCoord.x, this.frontCoord.y);
            env.lineTo(this.backCoord.x, this.backCoord.y);
            env.stroke();

            //Draw center
            env.lineWidth = 2;
            env.strokeStyle = "#000000";
            env.beginPath();
            env.moveTo(this.center.x, this.center.y);
            env.lineTo(this.backCoord.x, this.backCoord.y);
            env.stroke();

            //Axel:
            var centerOfParent = this.parent.getPosition(this.xoffset, 0);

            //Draw center
            env.lineWidth = 2;
            env.strokeStyle = "#555555";
            env.beginPath();
            env.moveTo(this.center.x, this.center.y);
            env.lineTo(centerOfParent.x, centerOfParent.y);
            env.stroke();
        };
    }

    function Coord(x, y) {
        this.x = x;
        this.y = y;
    }

    function CarEngine() {
        this.maxPower = 1;
        this.revs = 1000;
        this.maxPowerInReverse = 0.2;
        this.power = 0;
        this.trottle = 0;
        this.setTrottle = function (amount) {
            this.trottle = amount;
            this.update();
        };
        this.update = function () {
            if (this.trottle >= 0) {
                this.power = this.maxPower * this.trottle;
            } else {
                this.power = this.maxPowerInReverse * this.trottle;
            }
        };

        this.trottleUp = function (amount) {
            if (this.trottle + amount <= 1) {
                this.trottle += amount;
            } else {
                this.trottle = 1;
            }
            this.update();
        };

        this.trottleDown = function (amount) {
            if (this.trottle - amount >= 0) {
                this.trottle -= amount;
            } else {
                if (this.trottle - amount > -1) {
                    this.trottle -= amount;
                }
            }
            this.update();
        };

        this.trottleDownToZero = function (amount) {
            if (this.trottle - amount >= 0) {
                this.trottle -= amount;
            } else {
                this.trottle = 0;
            }
            this.update();
        };

        this.getForce = function () {
            return this.power;
        };

        this.tick = function () {
            if (this.trottle > 0) {
                this.trottleDownToZero(0.001);
            } else if (this.trottle < 0) {
                this.trottleUp(0.001);
            }
        };
    }

    function Wheels(parent) {
        this.mindrivingCircle = 80;
        this.frontWheels = [];
        this.backWheels = [];
        this.steerDist = 0;
        this.parent = parent;
        this.addFrontWheel = function (wheel) {
            this.frontWheels.push(wheel);
            this.update();
        };

        this.addBackWheel = function (wheel) {
            this.backWheels.push(wheel);
            this.update();
        };
        this.steerToDist = function (dist) {
            this.steerDist = dist;
            for (var index in this.frontWheels) {
                var targetAngle = Math.atan(
                    (this.centerOfBackWheels - this.frontWheels[index].xoffset) /
                        (this.frontWheels[index].yoffset - dist)
                );

                this.frontWheels[index].rotateTo(targetAngle);
            }
        };

        this.increment = function (val) {
            if (this.steerAngle + val > Math.PI) {
                newSteerAngle = -this.steerAngle + val;
            } else {
                newSteerAngle = this.steerAngle + val;
            }

            var ackDistance = Math.tan(newSteerAngle) * 100;
            if (Math.abs(ackDistance) > this.mindrivingCircle) {
                this.steerAngle = newSteerAngle;
                this.steerToDist(ackDistance);
            }
            //Angle of steer to ackerman distance:
        };

        //reduce to zero
        this.reduce = function (val) {
            val = val || 1.05;

            //this.steerAngle = Math.atan(this.steerDist)/100

            if (Math.abs(this.steerDist * val) <= 1100) {
                this.steerDist *= val;
                this.steerToDist(this.steerDist);
            }
        };

        this.steerAngle = 0.5 * Math.PI;

        this.incrementDistance = function (val) {
            this.steerDist += val;
            this.steerToDist(this.steerDist);
        };

        this.update = function () {
            //Center of back wheels (x)
            sum = 0;
            totalBackWheels = 0;
            for (var index in this.backWheels) {
                totalBackWheels += 1;
                sum += this.backWheels[index].xoffset;
            }
            if (totalBackWheels > 0) {
                this.centerOfBackWheels = sum / totalBackWheels;
            }
            //Anckerman center:
        };

        this.render = function (env) {
            //Do not draw debug:
            //return(true)

            var anckermanPos = this.parent.getPosition(this.centerOfBackWheels, this.steerDist);
            if (this.getAckermanRadius() > 1 && this.getAckermanRadius() < 1000) {
                var ackermanCenter = this.getAckermanpos();

                env.beginPath();
                //console.log(this.getAckermanRadius())
                env.arc(ackermanCenter.x, ackermanCenter.y, 2, 0, 2 * Math.PI, false);
                env.stroke();

                for (index in this.frontWheels) {
                    env.lineWidth = 0.5;
                    env.strokeStyle = "rgba(200,200,200,0.9)";
                    env.beginPath();
                    env.moveTo(this.frontWheels[index].center.x, this.frontWheels[index].center.y);
                    env.lineTo(anckermanPos.x, anckermanPos.y);
                    env.stroke();
                }

                env.beginPath();
                //console.log(this.getAckermanRadius())
                env.arc(anckermanPos.x, anckermanPos.y, this.getAckermanRadius(), 0, 2 * Math.PI, false);
                env.stroke();
            }
        };
        this.getAckermanpos = function () {
            return this.parent.getPosition(this.centerOfBackWheels, this.steerDist);
        };
        this.getRelativeAckermanPos = function () {
            return new Coord(this.centerOfBackWheels, this.steerDist);
        };

        this.getAckermanRadius = function () {
            return Math.abs(this.steerDist);
        };
    }

    document.loadedImages = {};
    function Car() {
        this.xpos = 100;
        this.ypos = 100;
        this.friction = 0.95; //-1
        this.mass = 50;
        this.blinkers = 0; //0 = off , -1 left, 1: right, 2 all
        this.blinkerIteration = 0;

        this.vforward = 0;
        this.engine = new CarEngine();
        this.reverse = false;
        this.heading = 0;
        this.braking = 0;
        this.imgUrl = "./assets/sports_car_grey.png";

        this.imageObj = new Image();
        this.imageObj.src = this.imgUrl;
        this.imageXoffset = 2;
        this.imageYoffset = 5;
        this.imageLoaded = false;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var parent = this;
        this.imageObj.onload = function () {
            parent.imageLoaded = true;
            console.log(this.src);
        };

        //Following determines the car sizes (pixels):
        this.height = 190 / 2;
        this.length = this.height;
        this.width = 45;

        this.leftFrontWheel = new Wheel(-(this.width / 2), this.height / 3, this);
        this.rightFrontWheel = new Wheel(this.width / 2, this.height / 3, this);

        //this.midLeftFrontWheel = new Wheel(-(this.width/2), this.height/6, this)
        //this.midRightFrontWheel = new Wheel((this.width/2), this.height/6, this)

        //this.leftFrontWheel.bindTo(this.rightFrontWheel)
        this.leftBackWheel = new Wheel(-(this.width / 2), -(this.height / 3), this);
        this.rightBackWheel = new Wheel(this.width / 2, -(this.height / 3), this);
        this.wheels = [this.leftFrontWheel, this.rightFrontWheel, this.leftBackWheel, this.rightBackWheel];
        this.steering = new Wheels(this);
        this.steering.addFrontWheel(this.leftFrontWheel);
        this.steering.addFrontWheel(this.rightFrontWheel);

        //this.steering.addFrontWheel(this.midLeftFrontWheel);
        //this.steering.addFrontWheel(this.midRightFrontWheel);

        this.steering.addBackWheel(this.leftBackWheel);
        this.steering.addBackWheel(this.rightBackWheel);

        this.steerIncrement = function (increment) {
            //this.leftFrontWheel.increment(increment);
            this.steering.increment(increment);
        };

        this.blinkersLeft = function () {
            if (this.blinkers != 2) {
                this.blinkers = -1;
            }
        };
        this.blinkersRight = function () {
            if (this.blinkers != 2) {
                this.blinkers = 1;
            }
        };

        this.blinkersReset = function () {
            this.blinkers = 0;
        };

        this.blinkersWarning = function () {
            this.blinkers = 2;
        };

        this.render = function (env) {
            for (var index in this.wheels) {
                this.wheels[index].render(env);
            }

            env.lineWidth = 2;
            env.strokeStyle = "#666";
            env.beginPath();
            env.moveTo(this.frontCoord.x, this.frontCoord.y);
            env.lineTo(this.backCoord.x, this.backCoord.y);
            env.stroke();

            /*
		env.strokeStyle = "#2222FF";
		env.lineWidth = 1
		env.beginPath();
		//console.log(this.getAckermanRadius())
		ack = this.steering.getAckermanpos()
		env.arc(ack.x, ack.y, this.dCenterAck, 0, 2*Math.PI, false)
		env.stroke()*/

            /*
		env.lineWidth =2
		env.strokeStyle = "#FF2222";
		env.beginPath();
      		env.moveTo(this.xpos, this.ypos);
      		env.lineTo(this.targetX, this.targetY);
      		env.stroke();*/
            this.steering.render(env);

            if (this.imageLoaded) {
                LoadImageToCanvas(
                    env,
                    this.imageObj,
                    this.xpos,
                    this.ypos,
                    -this.heading,
                    this.width / 2 + this.imageXoffset,
                    this.height / 2 + this.imageYoffset
                );
            }
            //Draw braking lights:

            if (this.braking > 0) {
                // Fill with gradient
                env.fillStyle = grd;

                env.beginPath();

                var leftLightPos = this.getPosition(-0.5 * this.length, 0.4 * this.width);
                var grd = env.createRadialGradient(
                    leftLightPos.x,
                    leftLightPos.y,
                    0,
                    leftLightPos.x,
                    leftLightPos.y,
                    5
                );
                grd.addColorStop(0, "rgba(255,0,0,1)");
                grd.addColorStop(1, "rgba(255,0,0,0)");

                env.arc(leftLightPos.x, leftLightPos.y, 5, 0, 2 * Math.PI, false);
                env.fillStyle = grd;
                env.fill();

                var rightLightPos = this.getPosition(-0.5 * this.length, -0.4 * this.width);
                var grd = env.createRadialGradient(
                    rightLightPos.x,
                    rightLightPos.y,
                    0,
                    rightLightPos.x,
                    rightLightPos.y,
                    5
                );
                grd.addColorStop(0, "rgba(255,0,0,1)");
                grd.addColorStop(1, "rgba(255,0,0,0)");

                env.fillStyle = grd;
                env.arc(rightLightPos.x, rightLightPos.y, 5, 0, 2 * Math.PI, false);
                env.fill();
            }
            //Draw blinkers:

            if (this.blinkers != 0) {
                this.blinkerIteration += 1;
                if (this.blinkerIteration > 20) {
                    this.blinkerIteration = 1;
                }

                if (this.blinkers == -1 || this.blinkers == 2) {
                    env.beginPath();
                    var leftLightPos = this.getPosition(-0.47 * this.length, 0.42 * this.width);
                    var grd = env.createRadialGradient(
                        leftLightPos.x,
                        leftLightPos.y,
                        0,
                        leftLightPos.x,
                        leftLightPos.y,
                        5
                    );
                    grd.addColorStop(0, "rgba(255,150,0," + Math.max(5 / this.blinkerIteration, 0) + ")");
                    grd.addColorStop(1, "rgba(255,150,0,0)");

                    env.arc(leftLightPos.x, leftLightPos.y, 5, 0, 2 * Math.PI, false);
                    env.fillStyle = grd;
                    env.fill();
                }

                if (this.blinkers == 1 || this.blinkers == 2) {
                    env.beginPath();
                    var rightLightPos = this.getPosition(-0.47 * this.length, -0.42 * this.width);
                    var grd = env.createRadialGradient(
                        rightLightPos.x,
                        rightLightPos.y,
                        0,
                        rightLightPos.x,
                        rightLightPos.y,
                        5
                    );
                    grd.addColorStop(0, "rgba(255,150,0," + Math.max(5 / this.blinkerIteration, 0) + ")");
                    grd.addColorStop(1, "rgba(255,150,0,0)");

                    env.fillStyle = grd;
                    env.arc(rightLightPos.x, rightLightPos.y, 5, 0, 2 * Math.PI, false);
                    env.fill();
                }
            }
        };

        this.brakeReverse = function (val) {
            if (this.reverse == false) {
                this.engine.trottleDownToZero(0.1);
                this.braking = 5;
                if (this.vforward < 0.01) {
                    this.reverse = true;
                }
            } else {
                this.engine.trottleDown(val);
            }
        };

        this.brake = function (power) {
            if (power == 0) {
                return false;
            }

            this.engine.trottleDownToZero(0.3);
            this.braking = power | 5;
            if (this.vforward < 0.001) {
                this.vforward = 0;
            }
        };

        this.getPosition = function (relX, relY) {
            this.alpha = this.heading;
            /*
		this.componentAlpha = Math.PI - this.alpha - Math.atan(relX / relY)
 		this.component = Math.cos(this.componentAlpha)*relY
		//Calculate the coordinates of the front and back of the car :)
		return( new Coord( this.xpos + Math.cos(this.componentAlpha)*this.component, this.ypos + Math.sin(this.componentAlpha)*this.component));		
		*/
            return new Coord(
                this.xpos + relY * Math.cos(-this.alpha) - relX * Math.sin(-this.alpha),
                this.ypos + relY * Math.sin(-this.alpha) + relX * Math.cos(-this.alpha)
            );
        };

        this.setPositionFromBack = function (ack, ackDist, distance) {
            //ack.x = ack.x - this.backCoord.x;
            //ack.y = ack.y - this.backCoord.y;

            var ackToBackDistance = ackDist;
            //Distance Back to center =
            var dBackCenter = this.steering.centerOfBackWheels;
            //Distance back to ack center
            //= ackToBackDistance
            var dCenterAck = Math.sqrt(dBackCenter * dBackCenter + ackToBackDistance * ackToBackDistance);
            //	rotation = this.heading + rotation
            //console.log( dCenterAck*Math.sin(rotation), dCenterAck*Math.cos(rotation)-this.width)
            //New coordinates are:

            this.dCenterAck = dCenterAck;

            this.backWheelsPosition = this.getPosition(this.steering.centerOfBackWheels, 0);

            var x = this.xpos - ack.x;
            var y = this.ypos - ack.y;

            var A = Math.atan2(x, y);
            //distance

            if (ackDist < 0) {
                angularSpeed = -(distance / (Math.PI * 2.0 * this.dCenterAck)) * Math.PI * 2;
            } else {
                angularSpeed = (distance / (Math.PI * 2.0 * this.dCenterAck)) * Math.PI * 2;
            }
            this.targetX = ack.x + dCenterAck * Math.sin(A + angularSpeed);
            this.targetY = ack.y + dCenterAck * Math.cos(A + angularSpeed);
            this.heading += angularSpeed;

            this.xpos = this.targetX;
            this.ypos = this.targetY;

            //console.log(dCenterAck*Math.cos(rotation))
            //this.ypos += dCenterAck*Math.cos(rotation)
        };

        this.frontCoord = new Coord(this.x, this.y);
        this.backCoord = new Coord(this.x, this.y);

        this.tick = function () {
            if (this.reverse == true && this.vforward > 0.01) {
                this.reverse = false;
            }

            if (this.braking > 0) {
                this.vforward *= 0.95;
                this.braking -= 1;
            }
            //this.steering.reduce();
            this.alpha = this.heading;
            //Calculate the coordinates of the front and back of the car :)
            xOffset = Math.sin(this.alpha) * 0.5 * this.length;
            yOffset = Math.cos(this.alpha) * 0.5 * this.length;

            this.frontCoord.x = xOffset + this.xpos;
            this.frontCoord.y = yOffset + this.ypos;
            this.backCoord.x = this.xpos - xOffset;
            this.backCoord.y = this.ypos - yOffset;

            this.engine.tick();
            var f = this.engine.getForce();

            this.vforward += f;
            this.vforward *= this.friction;

            var r = this.steering.steerDist;
            if (Math.abs(r) > 0 && Math.abs(r) < 1000) {
                var ackerAlphaMovement = Math.asin((0.5 * this.vforward) / r) / 2;

                this.dxAcker = r * Math.sin(ackerAlphaMovement) - r * Math.sin(0);
                this.dyAcker = r * Math.cos(ackerAlphaMovement) - r * Math.cos(0);
                this.setPositionFromBack(this.steering.getAckermanpos(), r, this.vforward);

                //this.xpos += this.dxAcker
                //this.ypos += this.dyAcker

                if (iterations % 10 == 0) {
                    //console.log(this.steering.getRelativeAckermanPos())
                    //console.log(this.vforward)
                    //console.log(this.dyAcker, this.dxAcker)
                }
            } else {
                this.xpos += this.vforward * Math.sin(this.heading);
                this.ypos += this.vforward * Math.cos(this.heading);
            }
            //Calculate the coordinates of the front and back of the car :)
            xOffset = Math.sin(this.alpha) * 0.5 * this.length;
            yOffset = Math.cos(this.alpha) * 0.5 * this.length;

            this.frontCoord.x = xOffset + this.xpos;
            this.frontCoord.y = yOffset + this.ypos;
            this.backCoord.x = this.xpos - xOffset;
            this.backCoord.y = this.ypos - yOffset;

            if (this.steering.steerAngle > 2) {
                this.blinkersRight();
            } else if (this.steering.steerAngle < 1) {
                this.blinkersLeft();
            } else {
                this.blinkersReset();
            }
        };
        this.tick();
    }

    function getShortAngle(a1, a2) {
        return Math.cos(a1 - a2 + Math.PI / 2);
    }

    function DriveRoutePoint(x, y, isFinal) {
        this.x = x;
        this.y = y;
        this.isFinal = isFinal || false;
        this.render = function (env) {
            env.fillStyle = "rgba(30,120,0,0.8)";
            env.rect(this.x - 5, this.y - 5, 10, 10);
            env.fill();
        };
    }

    function Driver(car) {
        this.car = car;
        //this.driveRoute = [new DriveRoutePoint(300,300), new DriveRoutePoint(100,300), new DriveRoutePoint(100,100), new DriveRoutePoint(300,300)  ]
        this.driveRoute = [new DriveRoutePoint(300, 300)];

        this.reachedTarget = true;
        this.breakOnEnd = false;

        this.breakingDistance = 300; //30
        this.slowSpeed = 0.3;
        this.normalSpeed = 5;
        this.targetReachedDistance = 170; //15

        this.chooseTurnAround = function () {
            //
        };

        this.tick = function () {
            if (this.reachedTarget == true) {
                if (this.car.vforward > 0) {
                    this.car.engine.setTrottle(0);
                    this.car.brake(1);
                } else {
                    this.car.engine.setTrottle(0);
                    this.car.brake(0);
                }

                return false;
            }

            //Calculate desired heading to target:
            this.headingToTarget = Math.atan2(
                this.currentTarget.x - this.car.xpos,
                this.currentTarget.y - this.car.ypos
            );

            //Calculate the difference in heading:
            this.headingDelta = this.car.heading - this.headingToTarget;

            //Calculate the distance to the target:
            this.distanceToTarget = Math.sqrt(
                Math.pow(this.car.xpos - this.currentTarget.x, 2) + Math.pow(this.car.ypos - this.currentTarget.y, 2)
            );

            if (this.distanceToTarget <= this.targetReachedDistance) {
                this.reachedTarget = true;

                if (this.car.vforward > 0) {
                    this.car.brake(1);
                    this.car.engine.setTrottle(0);
                }

                this.gotoNextTarget(this.currentTarget.isFinal);
            }

            if (this.reachedTarget == true) {
                return false;
            }

            //Do we stand still and do we need to drive?
            if (this.distanceToTarget >= this.breakingDistance && this.car.vforward < this.normalSpeed) {
                this.car.engine.trottleUp(0.02);
            }

            if (this.distanceToTarget < this.breakingDistance) {
                if (this.car.vforward > this.slowSpeed) {
                    if (this.car.vforward > this.slowSpeed * 2) {
                        this.car.brake(0.98);
                    }

                    this.car.brake(0.3);
                } else {
                    this.car.engine.trottleUp(0.05);
                }
            }

            //Steer the wheels;
            //High heading delta = sharp steering, low: center the steering

            this.steeringDelta = getShortAngle(
                this.headingToTarget,
                this.car.heading - this.car.steering.steerAngle + 0.5 * Math.PI
            );

            this.steeringCorrection = this.steeringDelta * 0.6;

            this.sharpestSteeringCorrection = 0.2;

            if (this.steeringCorrection > this.sharpestSteeringCorrection) {
                this.steeringCorrection = this.sharpestSteeringCorrection;
            }

            if (this.steeringCorrection < -this.sharpestSteeringCorrection) {
                this.steeringCorrection = -this.sharpestSteeringCorrection;
            }

            //if (Math.abs(this.steeringDelta)>2) {
            //this.car.steering.increment(0.1)
            //} else {

            this.car.steering.increment(this.steeringCorrection);
            //}
        };

        this.popNextTarget = function () {
            return this.driveRoute.shift();
        };

        this.gotoNextTarget = function () {
            var target = this.popNextTarget();
            if (target) {
                this.currentTarget = target;
                this.reachedTarget = false;
            } else {
                if (this.brakeOnEnd) {
                    this.car.engine.trottleDown(0.9);
                    this.car.brake(1);
                }
                this.car.blinkersWarning();
            }
        };
        this.gotoNextTarget();

        this.setTarget = function (coord) {
            this.reachedTarget = false;
            this.currentTarget = coord;
        };

        this.render = function (env) {
            env.lineWidth = 2;
            env.strokeStyle = "rgba(80,255,80,0.4)";
            env.beginPath();
            env.moveTo(this.car.xpos, this.car.ypos);
            env.lineTo(this.currentTarget.x, this.currentTarget.y);
            env.stroke();

            /*
		env.font="20px Georgia";
		env.fillText(this.steeringDelta,this.car.xpos+30,this.car.ypos+30);
		*/
            for (var index in this.driveRoute) {
                this.driveRoute[index].render(env);
            }
        };
    }

    // function subdivideOver(xStart, yStart, xEnd, yEnd, minDistance) {
    //     var angle = Math.atan2(xEnd - xStart, yEnd - yStart);
    //     var distance = Math.sqrt(Math.pow(xEnd - xStart, 2) + Math.pow(yEnd - yStart, 2));
    //     // var amount = Math.floor(distance / minDistance);
    //     var coords = [];
    //     for (var d = 0; d < distance; d += minDistance) {
    //         //Precalc cos and sin to make this faster :)
    //         //console.log(d)
    //         coords.push(new Coord(xStart + Math.sin(angle) * d, yStart + Math.cos(angle) * d));
    //     }
    //     return coords;
    // }

    Wegmeubulair = {};

    Wegmeubulair.pylon = function (x, y, rotation) {
        this.xpos = x || 30;
        this.ypos = y || 30;
        this.rotation = rotation | 0;
        console.log(x, y);
        this.render = function (env) {
            env.strokeStyle = "#AA0000";
            env.lineWidth = 2;
            env.beginPath();
            env.rect(this.xpos - 3.0, this.ypos - 3.0, 6, 6);
            env.stroke();
        };
        this.tick = function () {
            //
        };
    };

    Wegmeubulair.tarmac10 = function (x, y, rotation) {
        this.xpos = x || 10;
        this.ypos = y || 10;
        this.rotation = rotation | 0;
        console.log(x, y);
        this.render = function (env) {
            env.strokeStyle = "#AA0000";
            env.lineWidth = 2;
            env.beginPath();
            env.rect(this.xpos - 3.0, this.ypos - 3.0, 6, 6);
            env.stroke();
        };
        this.tick = function () {
            this.xpos += 0.01;
        };
    };

    /*
Wegmeubulair_pylonnen = function(xStart, yStart, xEnd, yEnd, distanceBetween){		
		this.xStart = xStart;
		this.yStart = yStart;
		this.xEnd = xEnd;
		this.yEnd = yEnd;
		this.pylonPositions = subdivideOver(xStart, yStart, xEnd, yEnd, distanceBetween)		
		this.render = function(env){
			env.strokeStyle = "#AA0000";
			env.lineWidth=2;
			for(var i in this.pylonPositions){
				env.beginPath();			
				env.rect(this.pylonPositions[i].x-3,this.pylonPositions[i].y-3,6,6);
				env.stroke();
			}			


		}	
		

	}

*/

    // function RoutePoint(x, y, id) {
    //     this.id = id || "unset";
    //     this.position = new Coord(x, y);
    //     this.render = function (env) {
    //         env.strokeStyle = "#666666";
    //         env.fillStyle = "#666666";
    //         env.lineWidth = 1;
    //         env.beginPath();
    //         //console.log(this.getAckermanRadius())
    //         env.arc(this.position.x, this.position.y, 3, 0, 2 * Math.PI, false);
    //         env.stroke();
    //         env.fill();
    //     };
    //     this.setId = function (id) {
    //         this.id = id;
    //     };
    // }

    // function Route(id) {
    //     this.points = {};
    //     this.id = id;
    //     this.pointIdPosition = 0;
    //     this.addPoint = function (routePoint) {
    //         this.points[this.pointIdPosition] = routePoint;
    //         this.pointIdPosition++;
    //     };
    // }

    // function Routes() {
    //     //
    // }

    // function RoadSection(id) {
    //     this.width = 200;
    //     this.height = 200;

    //     this.tick = function () {};

    //     this.render = function () {};
    // }

    function Level() {
        /*
	//w = new Wegmeubulair();
	this.objects = []
	
	//Vak:
	this.objects.push(new Wegmeubulair_pylonnen(200,200,250,200, 20))
	this.objects.push(new Wegmeubulair_pylonnen(250,220,250,400, 20))
	*/

        this.render = function (env) {
            for (var index in this.objects) {
                this.objects[index].render(env);
            }
        };
    }

    EditorModi = {};
    EditorModi.array = function () {
        this.pointA = Coord();
        this.pointB = Coord();

        this.render = function () {
            //
        };

        this.leftClick = function (position, n) {
            if (n == 0) {
                this.pointA.x = position.x;
                this.pointA.y = position.y;
            }
            if (n == 1) {
                this.pointB.x = position.x;
                this.pointB.y = position.y;
            }
        };
    };

    AvailableObjects = {
        Wegmeubulair: {
            name: "Wegmeubulair",
            contents: Wegmeubulair,
        },
    };

    // function Editor(appendTo, canvii) {
    //     $(appendTo).append('<div id="editor"></div>');

    //     this.modi = ["place", "place_array"];
    //     this.modus = "place_array";

    //     //Array tool:
    //     this.pointA = new Coord();
    //     this.pointB = new Coord();
    //     this.timesClicked = 0;

    //     this.processArrayToolClick = function (x, y) {
    //         if (this.selectedCatalogObject == undefined) {
    //             this.timesClicked = 0;
    //             return 0;
    //         }

    //         this.timesClicked++;
    //         if (this.timesClicked == 1) {
    //             console.log(this);
    //             this.pointA.x = x;
    //             this.pointA.y = y;
    //         }
    //         if (this.timesClicked == 2) {
    //             this.pointB.x = x;
    //             this.pointB.y = y;

    //             var points = subdivideOver(this.pointA.x, this.pointA.y, this.pointB.x, this.pointB.y, 25);
    //             for (var index in points) {
    //                 world.addObject(new this.selectedCatalogObject(points[index].x, points[index].y));
    //             }
    //             this.timesClicked = 0;
    //         }
    //     };

    //     this.mouseDown = function (x, y) {
    //         if (this.modus == "place") {
    //             world.addObject(new this.selectedCatalogObject(x, y));
    //         }

    //         if (this.modus == "place_array") {
    //             this.processArrayToolClick(x, y);
    //         }
    //     };

    //     this.drawCatalog = function () {
    //         this.html = "";
    //         for (var groupId in AvailableObjects) {
    //             this.html += '<div class="editorCatalogGroup"><h3>' + AvailableObjects[groupId].name + "</h3>";

    //             for (var objectId in AvailableObjects[groupId].contents) {
    //                 this.html +=
    //                     '<div class="editorCatalogObject" id="' +
    //                     groupId +
    //                     "_" +
    //                     objectId +
    //                     '">' +
    //                     objectId +
    //                     '<canvas id="canvas_' +
    //                     groupId +
    //                     "_" +
    //                     objectId +
    //                     '">width="75px" height="75px"></canvas></div>';
    //             }
    //             this.html += "</div>";
    //         }
    //         $("#editor").html(this.html);

    //         for (var groupId in AvailableObjects) {
    //             for (var objectId in AvailableObjects[groupId].contents) {
    //                 var canvasContext = document.getElementById("canvas_" + groupId + "_" + objectId).getContext("2d");
    //                 var o = new AvailableObjects[groupId].contents[objectId]();
    //                 o.render(canvasContext);
    //             }
    //         }

    //         $(".editorCatalogObject").on("click", function (e, i) {
    //             document.editor.setSelectedCatalogObject(e.currentTarget.id);
    //         });

    //         this.selectedCatalogObject = false;
    //         this.setSelectedCatalogObject = function (id) {
    //             var parts = id.split("_");
    //             this.selectedCatalogObject = AvailableObjects[parts[0]].contents[parts[1]];
    //             console.log("Selected " + id + " from the catalog");
    //         };
    //     };

    //     this.drawCatalog();
    // }

    function World() {
        this.translateX = 0;
        this.translateY = 0;
        this.viewCenterX = canvas.width / 2;
        this.viewCenterY = canvas.height / 2;
        this.targetFrameTime = 40; //Time in milisec per frame, to set FPS to 60 = 1000/60 => 16.6, 24 fps => 41

        this.maxParticles = 10000;
        this.objects = [];
        this.particles = [];
        this.recalculateWorld = false;

        this.tick = function () {
            var date = new Date();
            var tickStart = date.getMilliseconds();

            //Recalculate all object id's
            if (this.recalculateWorld) {
                var newObjects = [];
                var pointer = 0;
                for (var objectIndex in this.objects) {
                    if (this.objects[objectIndex] != null) {
                        newObjects.push(this.objects[objectIndex]);
                        this.objects[objectIndex].worldId = pointer;
                        pointer++;
                    }
                }
                this.objects = newObjects;
            }

            for (var objectIndex in this.objects) {
                if (this.objects[objectIndex] != null) {
                    this.objects[objectIndex].tick();
                }
            }

            for (var particleIndex in this.particles) {
                if (this.objects[objectIndex] != null) {
                    this.particles[particleIndex].tick();
                }
            }

            var date = new Date();
            var tickEnd = date.getMilliseconds();

            this.render(tickEnd - tickStart);
        };

        this.render = function (tickTime) {
            var date = new Date();
            var frameStart = date.getMilliseconds();
            //Empty the canvas
            context.clearRect(-10000, -10000, 10000 * canvas.width, 10000 * canvas.height);
            context.translate(this.translateX, this.translateY);

            this.viewCenterX = this.viewCenterX - this.translateX;
            this.viewCenterY = this.viewCenterY - this.translateY;

            this.minX = this.viewCenterX - 0.5 * canvas.width;
            this.maxX = this.viewCenterX + 0.5 * canvas.width;
            this.minY = this.viewCenterY - 0.5 * canvas.height;
            this.maxY = this.viewCenterY + 0.5 * canvas.height;

            //Draw background (Grid)
            context.fillStyle = "#053066";
            context.fillRect(-10000, -10000, 10000 * canvas.width, 10000 * canvas.height);
            context.lineWidth = 1;
            context.strokeStyle = "#DDDDDD";

            var cellSize = 100;

            for (var y = this.minY - (this.viewCenterY % cellSize); y < this.maxY; y += cellSize) {
                context.beginPath();
                context.moveTo(this.minX, y);
                context.lineTo(this.maxX, y);
                context.stroke();
            }

            for (var x = this.minX - (this.viewCenterX % cellSize); x < this.maxX; x += cellSize) {
                context.beginPath();
                context.moveTo(x, this.minY);
                context.lineTo(x, this.maxY);
                context.stroke();
            }

            for (var particleIndex in this.particles) {
                if (this.particles[particleIndex] != null) {
                    this.particles[particleIndex].render();
                }
            }

            for (var objectIndex in this.objects) {
                if (this.objects[objectIndex] != null) {
                    this.objects[objectIndex].render(context);
                }
            }

            var endDate = new Date();
            var frameStop = endDate.getMilliseconds();
            var frameTime = frameStop - frameStart;
            //context.font="30px Arial";
            //context.fillText(frameTime + " / " + tickTime,playerOrganism.physics.xpos, playerOrganism.physics.ypos);

            self = this;
            var timeout = this.targetFrameTime - frameTime - tickTime;
            if (timeout <= 0 || timeout > this.targetFrameTime) {
                setTimeout(function () {
                    self.tick();
                }, 1);
            } else {
                setTimeout(function () {
                    self.tick();
                }, timeout);
            }
        };

        this.addParticle = function (particle) {
            this.particles.push(particle);
            if (this.particles.length - 1 >= this.maxParticles) {
                this.particles.shift();
            }
        };

        this.addObject = function (objectToAdd) {
            this.objects.push(objectToAdd);
            objectToAdd.worldId = this.objects.length - 1;
        };

        this.removeObject = function (id) {
            this.recalculateWorld = true;
            this.objects[id] = null;
        };
    }

    $(document).ready(function () {
        canvas = document.getElementById("sim");
        var ctx = canvas.getContext("2d");
        context = ctx;
        //document.editor = new Editor('.simWrapper')
        car = new Car();
        level = new Level();
        world = new World();

        aiCar = new Car();
        driver = new Driver(aiCar);

        world.addObject(aiCar);
        world.addObject(driver);

        aiCar2 = new Car();
        driver2 = new Driver(aiCar2);
        aiCar2.xpos = 0;
        aiCar2.ypos = 0;

        world.addObject(aiCar2);
        world.addObject(driver2);

        canvas.addEventListener("mousemove", function (evt) {
            var mousePos = CanvasFunctions.getMousePos(canvas, evt);

            var mouseX = world.viewCenterX - canvas.width * 0.5 + mousePos.x;
            var mouseY = world.viewCenterY - canvas.height * 0.5 + mousePos.y;
            context.rect(mouseX - 3, mouseY - 3, 3, 3);
            context.stroke();
        });

        canvas.addEventListener(
            "click",
            function (evt) {
                var mousePos = CanvasFunctions.getMousePos(canvas, evt);

                mouseX = mousePos.x + world.viewCenterX - canvas.width * 0.5;
                mouseY = mousePos.y + world.viewCenterY - canvas.height * 0.5;

                console.log(world.viewCenterX + ", " + canvas.width * 0.5);
                var message = "Mouse position: " + mousePos.x + "," + mousePos.y + ":" + mouseX + ", " + mouseY;
                //document.editor.mouseDown(mouseX,mouseY)

                console.log(message);
            },
            false
        );

        var pressedKeys = {};

        $(document).keydown(function (e) {
            pressedKeys[e.keyCode] = true;
        });

        $(document).keyup(function (e) {
            delete pressedKeys[e.keyCode];
        });

        iterations = 0;
        testAngle = 0;
        car.xpos = 300;

        world.addObject(car);

        setTarget = false;
        setInterval(function () {
            //ctx.clearRect(0,0,1000,1000);

            //Camera movement:
            var distanceX = Math.abs(car.xpos - world.viewCenterX);
            if (distanceX > 4) {
                var xspeed = 0.0004 * Math.pow(distanceX, 2);
                if (car.xpos > world.viewCenterX) {
                    world.translateX = -xspeed;
                }
                if (car.xpos < world.viewCenterX) {
                    world.translateX = xspeed;
                }
            } else {
                world.translateX = 0;
            }

            var distanceY = Math.abs(car.ypos - world.viewCenterY);
            if (distanceY > 4) {
                var yspeed = 0.0003 * Math.pow(distanceY, 2);
                if (car.ypos > world.viewCenterY) {
                    world.translateY = -yspeed;
                }
                if (car.ypos < world.viewCenterY) {
                    world.translateY = yspeed;
                }
            } else {
                world.translateY = 0;
            }

            //world.render();
            //level.render(ctx)

            iterations++;
            //car.heading+=0.01;

            if (pressedKeys[39]) {
                car.steerIncrement(0.05);
            }
            if (pressedKeys[37]) {
                car.steerIncrement(-0.05);
            }

            if (pressedKeys[38]) {
                car.engine.trottleUp(0.01);
            }

            if (pressedKeys[40]) {
                car.brakeReverse(0.01);
            }

            if (car.xpos && setTarget == false) {
                driver2.setTarget(new DriveRoutePoint(aiCar.xpos, aiCar.ypos, 0));
                driver2.reachedTarget = false;

                driver.setTarget(new DriveRoutePoint(car.xpos, car.ypos, 0));
                driver.reachedTarget = false;
                setTarget = false;
            }
        }, 50);
        world.tick();
    });
})();


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
class App {
}
exports.App = App;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
__webpack_require__(/*! core-js */ "./node_modules/core-js/index.js");
__webpack_require__(/*! ./style.css */ "./src/style.css");
__webpack_require__(/*! ./voorrang.js */ "./src/voorrang.js");
console.log("hello world");
new app_1.App();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {};
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/index.ts","vendors-node_modules_core-js_index_js-node_modules_jquery_dist_jquery_js"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpixi_typescript_boilerplate"] = self["webpackChunkpixi_typescript_boilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXhpLXR5cGVzY3JpcHQtYm9pbGVycGxhdGUvLi9zcmMvdm9vcnJhbmcuanMiLCJ3ZWJwYWNrOi8vcGl4aS10eXBlc2NyaXB0LWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL3BpeGktdHlwZXNjcmlwdC1ib2lsZXJwbGF0ZS8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vcGl4aS10eXBlc2NyaXB0LWJvaWxlcnBsYXRlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3BpeGktdHlwZXNjcmlwdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waXhpLXR5cGVzY3JpcHQtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9waXhpLXR5cGVzY3JpcHQtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9waXhpLXR5cGVzY3JpcHQtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waXhpLXR5cGVzY3JpcHQtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcGl4aS10eXBlc2NyaXB0LWJvaWxlcnBsYXRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLFFBQVEsbUJBQU8sQ0FBQyxvREFBUTs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CO0FBQ0E7QUFDQTtBQUNBLEk7OztBQUdBLEc7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1FQUFtRSxlQUFlO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUVBQW1FLGVBQWU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6eUNEOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxNQUFhLEdBQUc7Q0FFZjtBQUZELGtCQUVDOzs7Ozs7Ozs7Ozs7OztBQ0ZELCtEQUE0QjtBQUM1QixzRUFBaUI7QUFDakIsMERBQXFCO0FBQ3JCLDhEQUF1QjtBQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTNCLElBQUksU0FBRyxFQUFFLENBQUM7Ozs7Ozs7VUNQVjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtEQUFrRDtXQUNsRDtXQUNBLEU7Ozs7O1VDdkZBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXG52YXIgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgQ2FudmFzRnVuY3Rpb25zID0ge1xuICAgICAgICBnZXRNb3VzZVBvczogZnVuY3Rpb24gKGNhbnZhcywgZXZ0KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogZXZ0LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgeTogZXZ0LmNsaWVudFkgLSByZWN0LnRvcCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHJvdGF0ZUFuZFBhaW50SW1hZ2UoY29udGV4dCwgaW1hZ2UsIGFuZ2xlSW5SYWQsIHBvc2l0aW9uWCwgcG9zaXRpb25ZLCBheGlzWCwgYXhpc1kpIHtcbiAgICAvLyAgICAgY29udGV4dC50cmFuc2xhdGUocG9zaXRpb25YLCBwb3NpdGlvblkpO1xuICAgIC8vICAgICBjb250ZXh0LnJvdGF0ZShhbmdsZUluUmFkKTtcbiAgICAvLyAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIC1heGlzWCwgLWF4aXNZKTtcbiAgICAvLyAgICAgY29udGV4dC5yb3RhdGUoLWFuZ2xlSW5SYWQpO1xuICAgIC8vICAgICBjb250ZXh0LnRyYW5zbGF0ZSgtcG9zaXRpb25YLCAtcG9zaXRpb25ZKTtcbiAgICAvLyB9XG5cbiAgICAvKlxuZW52IFx0VGFyZ2V0IGNhbnZhc1xuaW1nIFx0U3BlY2lmaWVzIHRoZSBpbWFnZSwgY2FudmFzLCBvciB2aWRlbyBlbGVtZW50IHRvIHVzZSBcdCBcdFxuc3ggXHRPcHRpb25hbC4gVGhlIHggY29vcmRpbmF0ZSB3aGVyZSB0byBzdGFydCBjbGlwcGluZyBcdFBsYXkgaXQg77+9XHRcbnN5IFx0T3B0aW9uYWwuIFRoZSB5IGNvb3JkaW5hdGUgd2hlcmUgdG8gc3RhcnQgY2xpcHBpbmcgXHRQbGF5IGl0IO+/vVx0XG5zd2lkdGggXHRPcHRpb25hbC4gVGhlIHdpZHRoIG9mIHRoZSBjbGlwcGVkIGltYWdlIFx0UGxheSBpdCDvv71cdFxuc2hlaWdodCBcdE9wdGlvbmFsLiBUaGUgaGVpZ2h0IG9mIHRoZSBjbGlwcGVkIGltYWdlIFx0UGxheSBpdCDvv71cdFxueCBcdFRoZSB4IGNvb3JkaW5hdGUgd2hlcmUgdG8gcGxhY2UgdGhlIGltYWdlIG9uIHRoZSBjYW52YXMgXHRQbGF5IGl0IO+/vVx0XG55IFx0VGhlIHkgY29vcmRpbmF0ZSB3aGVyZSB0byBwbGFjZSB0aGUgaW1hZ2Ugb24gdGhlIGNhbnZhcyBcdFBsYXkgaXQg77+9XHRcbndpZHRoIFx0T3B0aW9uYWwuIFRoZSB3aWR0aCBvZiB0aGUgaW1hZ2UgdG8gdXNlIChzdHJldGNoIG9yIHJlZHVjZSB0aGUgaW1hZ2UpIFx0UGxheSBpdCDvv71cdFxuaGVpZ2h0IFx0T3B0aW9uYWwuIFRoZSBoZWlnaHQgb2YgdGhlIGltYWdlIHRvIHVzZSAoc3RyZXRjaCBvciByZWR1Y2UgdGhlIGltYWdlKVxuKi9cbiAgICBmdW5jdGlvbiBMb2FkSW1hZ2VUb0NhbnZhcyhlbnYsIGltYWdlT2JqLCBwb3NpdGlvblgsIHBvc2l0aW9uWSwgYW5nbGVJblJhZCwgYXhpc1gsIGF4aXNZKSB7XG4gICAgICAgIGVudi50cmFuc2xhdGUocG9zaXRpb25YLCBwb3NpdGlvblkpO1xuICAgICAgICBlbnYucm90YXRlKGFuZ2xlSW5SYWQpO1xuICAgICAgICBlbnYuZHJhd0ltYWdlKGltYWdlT2JqLCAtYXhpc1gsIC1heGlzWSk7XG4gICAgICAgIGVudi5yb3RhdGUoLWFuZ2xlSW5SYWQpO1xuICAgICAgICBlbnYudHJhbnNsYXRlKC1wb3NpdGlvblgsIC1wb3NpdGlvblkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFdoZWVsKHlvZmZzZXQsIHhvZmZzZXQsIHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy54b2Zmc2V0ID0geG9mZnNldDtcbiAgICAgICAgdGhpcy55b2Zmc2V0ID0geW9mZnNldDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAxMDtcbiAgICAgICAgdGhpcy5tYXhBbmdsZSA9IE1hdGguUEkgKiAwLjM1O1xuICAgICAgICB0aGlzLm1pbkFuZ2xlID0gLU1hdGguUEkgKiAwLjM1O1xuXG4gICAgICAgIHRoaXMuaGVhZGluZyA9IDA7XG4gICAgICAgIHRoaXMudnIgPSAwOyAvL1JvdGF0aW9uYWwgc3BlZWRcbiAgICAgICAgdGhpcy5ib3VuZFRvID0gW107XG5cbiAgICAgICAgdGhpcy5iaW5kVG8gPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICB0aGlzLmJvdW5kVG8ucHVzaChvYmopO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm90YXRlVG8gPSBmdW5jdGlvbiAobmV3SGVhZGluZykge1xuICAgICAgICAgICAgdGhpcy5oZWFkaW5nID0gbmV3SGVhZGluZztcbiAgICAgICAgICAgIGZvciAoaW5kZXggaW4gdGhpcy5ib3VuZFRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3VuZFRvW2luZGV4XS5yb3RhdGVUbyhuZXdIZWFkaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmluY3JlbWVudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVUbyh2YWx1ZSk7XG4gICAgICAgICAgICAvL3RoaXMucm90YXRlVG8oIE1hdGgubWF4KCBNYXRoLm1pbih0aGlzLmhlYWRpbmcgKyB2YWx1ZSwgdGhpcy5tYXhBbmdsZSksIHRoaXMubWluQW5nbGUpKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZnJvbnRDb29yZCA9IG5ldyBDb29yZCgpO1xuICAgICAgICB0aGlzLmJhY2tDb29yZCA9IG5ldyBDb29yZCgpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKGVudikge1xuICAgICAgICAgICAgZW52LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICBlbnYuc3Ryb2tlU3R5bGUgPSBcIiMyMjIyMjJcIjtcbiAgICAgICAgICAgIHRoaXMuYWxwaGEgPSB0aGlzLmhlYWRpbmcgKyB0aGlzLnBhcmVudC5oZWFkaW5nO1xuICAgICAgICAgICAgLy9DYWxjdWxhdGUgdGhlIGNlbnRlciBjb29yZGluYXRlcyBvZiB0aGUgd2hlZWxcbiAgICAgICAgICAgIHRoaXMuY2VudGVyID0gdGhpcy5wYXJlbnQuZ2V0UG9zaXRpb24odGhpcy54b2Zmc2V0LCB0aGlzLnlvZmZzZXQpO1xuXG4gICAgICAgICAgICAvL0NhbGN1bGF0ZSB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGZyb250IGFuZCBiYWNrIG9mIHRoZSBjYXIgOilcbiAgICAgICAgICAgIHhPZmZzZXQgPSBNYXRoLnNpbih0aGlzLmFscGhhKSAqIDAuNSAqIHRoaXMubGVuZ3RoO1xuICAgICAgICAgICAgeU9mZnNldCA9IE1hdGguY29zKHRoaXMuYWxwaGEpICogMC41ICogdGhpcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHRoaXMuZnJvbnRDb29yZC54ID0geE9mZnNldCArIHRoaXMuY2VudGVyLng7XG4gICAgICAgICAgICB0aGlzLmZyb250Q29vcmQueSA9IHlPZmZzZXQgKyB0aGlzLmNlbnRlci55O1xuICAgICAgICAgICAgdGhpcy5iYWNrQ29vcmQueCA9IHRoaXMuY2VudGVyLnggLSB4T2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5iYWNrQ29vcmQueSA9IHRoaXMuY2VudGVyLnkgLSB5T2Zmc2V0O1xuXG4gICAgICAgICAgICBlbnYuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBlbnYubW92ZVRvKHRoaXMuZnJvbnRDb29yZC54LCB0aGlzLmZyb250Q29vcmQueSk7XG4gICAgICAgICAgICBlbnYubGluZVRvKHRoaXMuYmFja0Nvb3JkLngsIHRoaXMuYmFja0Nvb3JkLnkpO1xuICAgICAgICAgICAgZW52LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAvL0RyYXcgY2VudGVyXG4gICAgICAgICAgICBlbnYubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgIGVudi5zdHJva2VTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICAgICAgZW52LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgZW52Lm1vdmVUbyh0aGlzLmNlbnRlci54LCB0aGlzLmNlbnRlci55KTtcbiAgICAgICAgICAgIGVudi5saW5lVG8odGhpcy5iYWNrQ29vcmQueCwgdGhpcy5iYWNrQ29vcmQueSk7XG4gICAgICAgICAgICBlbnYuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIC8vQXhlbDpcbiAgICAgICAgICAgIHZhciBjZW50ZXJPZlBhcmVudCA9IHRoaXMucGFyZW50LmdldFBvc2l0aW9uKHRoaXMueG9mZnNldCwgMCk7XG5cbiAgICAgICAgICAgIC8vRHJhdyBjZW50ZXJcbiAgICAgICAgICAgIGVudi5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgZW52LnN0cm9rZVN0eWxlID0gXCIjNTU1NTU1XCI7XG4gICAgICAgICAgICBlbnYuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBlbnYubW92ZVRvKHRoaXMuY2VudGVyLngsIHRoaXMuY2VudGVyLnkpO1xuICAgICAgICAgICAgZW52LmxpbmVUbyhjZW50ZXJPZlBhcmVudC54LCBjZW50ZXJPZlBhcmVudC55KTtcbiAgICAgICAgICAgIGVudi5zdHJva2UoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBDb29yZCh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQ2FyRW5naW5lKCkge1xuICAgICAgICB0aGlzLm1heFBvd2VyID0gMTtcbiAgICAgICAgdGhpcy5yZXZzID0gMTAwMDtcbiAgICAgICAgdGhpcy5tYXhQb3dlckluUmV2ZXJzZSA9IDAuMjtcbiAgICAgICAgdGhpcy5wb3dlciA9IDA7XG4gICAgICAgIHRoaXMudHJvdHRsZSA9IDA7XG4gICAgICAgIHRoaXMuc2V0VHJvdHRsZSA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIHRoaXMudHJvdHRsZSA9IGFtb3VudDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJvdHRsZSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3dlciA9IHRoaXMubWF4UG93ZXIgKiB0aGlzLnRyb3R0bGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG93ZXIgPSB0aGlzLm1heFBvd2VySW5SZXZlcnNlICogdGhpcy50cm90dGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudHJvdHRsZVVwID0gZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJvdHRsZSArIGFtb3VudCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cm90dGxlICs9IGFtb3VudDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cm90dGxlID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50cm90dGxlRG93biA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyb3R0bGUgLSBhbW91bnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJvdHRsZSAtPSBhbW91bnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyb3R0bGUgLSBhbW91bnQgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyb3R0bGUgLT0gYW1vdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50cm90dGxlRG93blRvWmVybyA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyb3R0bGUgLSBhbW91bnQgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJvdHRsZSAtPSBhbW91bnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudHJvdHRsZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZ2V0Rm9yY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3dlcjtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50cm90dGxlID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJvdHRsZURvd25Ub1plcm8oMC4wMDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRyb3R0bGUgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cm90dGxlVXAoMC4wMDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFdoZWVscyhwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5taW5kcml2aW5nQ2lyY2xlID0gODA7XG4gICAgICAgIHRoaXMuZnJvbnRXaGVlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5iYWNrV2hlZWxzID0gW107XG4gICAgICAgIHRoaXMuc3RlZXJEaXN0ID0gMDtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuYWRkRnJvbnRXaGVlbCA9IGZ1bmN0aW9uICh3aGVlbCkge1xuICAgICAgICAgICAgdGhpcy5mcm9udFdoZWVscy5wdXNoKHdoZWVsKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGRCYWNrV2hlZWwgPSBmdW5jdGlvbiAod2hlZWwpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja1doZWVscy5wdXNoKHdoZWVsKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RlZXJUb0Rpc3QgPSBmdW5jdGlvbiAoZGlzdCkge1xuICAgICAgICAgICAgdGhpcy5zdGVlckRpc3QgPSBkaXN0O1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5mcm9udFdoZWVscykge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRBbmdsZSA9IE1hdGguYXRhbihcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2VudGVyT2ZCYWNrV2hlZWxzIC0gdGhpcy5mcm9udFdoZWVsc1tpbmRleF0ueG9mZnNldCkgL1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZnJvbnRXaGVlbHNbaW5kZXhdLnlvZmZzZXQgLSBkaXN0KVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZyb250V2hlZWxzW2luZGV4XS5yb3RhdGVUbyh0YXJnZXRBbmdsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pbmNyZW1lbnQgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGVlckFuZ2xlICsgdmFsID4gTWF0aC5QSSkge1xuICAgICAgICAgICAgICAgIG5ld1N0ZWVyQW5nbGUgPSAtdGhpcy5zdGVlckFuZ2xlICsgdmFsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdTdGVlckFuZ2xlID0gdGhpcy5zdGVlckFuZ2xlICsgdmFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYWNrRGlzdGFuY2UgPSBNYXRoLnRhbihuZXdTdGVlckFuZ2xlKSAqIDEwMDtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhY2tEaXN0YW5jZSkgPiB0aGlzLm1pbmRyaXZpbmdDaXJjbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZWVyQW5nbGUgPSBuZXdTdGVlckFuZ2xlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RlZXJUb0Rpc3QoYWNrRGlzdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9BbmdsZSBvZiBzdGVlciB0byBhY2tlcm1hbiBkaXN0YW5jZTpcbiAgICAgICAgfTtcblxuICAgICAgICAvL3JlZHVjZSB0byB6ZXJvXG4gICAgICAgIHRoaXMucmVkdWNlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgdmFsID0gdmFsIHx8IDEuMDU7XG5cbiAgICAgICAgICAgIC8vdGhpcy5zdGVlckFuZ2xlID0gTWF0aC5hdGFuKHRoaXMuc3RlZXJEaXN0KS8xMDBcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc3RlZXJEaXN0ICogdmFsKSA8PSAxMTAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGVlckRpc3QgKj0gdmFsO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RlZXJUb0Rpc3QodGhpcy5zdGVlckRpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RlZXJBbmdsZSA9IDAuNSAqIE1hdGguUEk7XG5cbiAgICAgICAgdGhpcy5pbmNyZW1lbnREaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RlZXJEaXN0ICs9IHZhbDtcbiAgICAgICAgICAgIHRoaXMuc3RlZXJUb0Rpc3QodGhpcy5zdGVlckRpc3QpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9DZW50ZXIgb2YgYmFjayB3aGVlbHMgKHgpXG4gICAgICAgICAgICBzdW0gPSAwO1xuICAgICAgICAgICAgdG90YWxCYWNrV2hlZWxzID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMuYmFja1doZWVscykge1xuICAgICAgICAgICAgICAgIHRvdGFsQmFja1doZWVscyArPSAxO1xuICAgICAgICAgICAgICAgIHN1bSArPSB0aGlzLmJhY2tXaGVlbHNbaW5kZXhdLnhvZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG90YWxCYWNrV2hlZWxzID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyT2ZCYWNrV2hlZWxzID0gc3VtIC8gdG90YWxCYWNrV2hlZWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9BbmNrZXJtYW4gY2VudGVyOlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKGVudikge1xuICAgICAgICAgICAgLy9EbyBub3QgZHJhdyBkZWJ1ZzpcbiAgICAgICAgICAgIC8vcmV0dXJuKHRydWUpXG5cbiAgICAgICAgICAgIHZhciBhbmNrZXJtYW5Qb3MgPSB0aGlzLnBhcmVudC5nZXRQb3NpdGlvbih0aGlzLmNlbnRlck9mQmFja1doZWVscywgdGhpcy5zdGVlckRpc3QpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0QWNrZXJtYW5SYWRpdXMoKSA+IDEgJiYgdGhpcy5nZXRBY2tlcm1hblJhZGl1cygpIDwgMTAwMCkge1xuICAgICAgICAgICAgICAgIHZhciBhY2tlcm1hbkNlbnRlciA9IHRoaXMuZ2V0QWNrZXJtYW5wb3MoKTtcblxuICAgICAgICAgICAgICAgIGVudi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2V0QWNrZXJtYW5SYWRpdXMoKSlcbiAgICAgICAgICAgICAgICBlbnYuYXJjKGFja2VybWFuQ2VudGVyLngsIGFja2VybWFuQ2VudGVyLnksIDIsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZW52LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpbmRleCBpbiB0aGlzLmZyb250V2hlZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudi5saW5lV2lkdGggPSAwLjU7XG4gICAgICAgICAgICAgICAgICAgIGVudi5zdHJva2VTdHlsZSA9IFwicmdiYSgyMDAsMjAwLDIwMCwwLjkpXCI7XG4gICAgICAgICAgICAgICAgICAgIGVudi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgZW52Lm1vdmVUbyh0aGlzLmZyb250V2hlZWxzW2luZGV4XS5jZW50ZXIueCwgdGhpcy5mcm9udFdoZWVsc1tpbmRleF0uY2VudGVyLnkpO1xuICAgICAgICAgICAgICAgICAgICBlbnYubGluZVRvKGFuY2tlcm1hblBvcy54LCBhbmNrZXJtYW5Qb3MueSk7XG4gICAgICAgICAgICAgICAgICAgIGVudi5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbnYuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdldEFja2VybWFuUmFkaXVzKCkpXG4gICAgICAgICAgICAgICAgZW52LmFyYyhhbmNrZXJtYW5Qb3MueCwgYW5ja2VybWFuUG9zLnksIHRoaXMuZ2V0QWNrZXJtYW5SYWRpdXMoKSwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlbnYuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0QWNrZXJtYW5wb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0UG9zaXRpb24odGhpcy5jZW50ZXJPZkJhY2tXaGVlbHMsIHRoaXMuc3RlZXJEaXN0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRSZWxhdGl2ZUFja2VybWFuUG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb29yZCh0aGlzLmNlbnRlck9mQmFja1doZWVscywgdGhpcy5zdGVlckRpc3QpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZ2V0QWNrZXJtYW5SYWRpdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5zdGVlckRpc3QpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRvY3VtZW50LmxvYWRlZEltYWdlcyA9IHt9O1xuICAgIGZ1bmN0aW9uIENhcigpIHtcbiAgICAgICAgdGhpcy54cG9zID0gMTAwO1xuICAgICAgICB0aGlzLnlwb3MgPSAxMDA7XG4gICAgICAgIHRoaXMuZnJpY3Rpb24gPSAwLjk1OyAvLy0xXG4gICAgICAgIHRoaXMubWFzcyA9IDUwO1xuICAgICAgICB0aGlzLmJsaW5rZXJzID0gMDsgLy8wID0gb2ZmICwgLTEgbGVmdCwgMTogcmlnaHQsIDIgYWxsXG4gICAgICAgIHRoaXMuYmxpbmtlckl0ZXJhdGlvbiA9IDA7XG5cbiAgICAgICAgdGhpcy52Zm9yd2FyZCA9IDA7XG4gICAgICAgIHRoaXMuZW5naW5lID0gbmV3IENhckVuZ2luZSgpO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gMDtcbiAgICAgICAgdGhpcy5icmFraW5nID0gMDtcbiAgICAgICAgdGhpcy5pbWdVcmwgPSBcIi4vYXNzZXRzL3Nwb3J0c19jYXJfZ3JleS5wbmdcIjtcblxuICAgICAgICB0aGlzLmltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2VPYmouc3JjID0gdGhpcy5pbWdVcmw7XG4gICAgICAgIHRoaXMuaW1hZ2VYb2Zmc2V0ID0gMjtcbiAgICAgICAgdGhpcy5pbWFnZVlvZmZzZXQgPSA1O1xuICAgICAgICB0aGlzLmltYWdlTG9hZGVkID0gZmFsc2U7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcztcbiAgICAgICAgdGhpcy5pbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwYXJlbnQuaW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zcmMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vRm9sbG93aW5nIGRldGVybWluZXMgdGhlIGNhciBzaXplcyAocGl4ZWxzKTpcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxOTAgLyAyO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gNDU7XG5cbiAgICAgICAgdGhpcy5sZWZ0RnJvbnRXaGVlbCA9IG5ldyBXaGVlbCgtKHRoaXMud2lkdGggLyAyKSwgdGhpcy5oZWlnaHQgLyAzLCB0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEZyb250V2hlZWwgPSBuZXcgV2hlZWwodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMywgdGhpcyk7XG5cbiAgICAgICAgLy90aGlzLm1pZExlZnRGcm9udFdoZWVsID0gbmV3IFdoZWVsKC0odGhpcy53aWR0aC8yKSwgdGhpcy5oZWlnaHQvNiwgdGhpcylcbiAgICAgICAgLy90aGlzLm1pZFJpZ2h0RnJvbnRXaGVlbCA9IG5ldyBXaGVlbCgodGhpcy53aWR0aC8yKSwgdGhpcy5oZWlnaHQvNiwgdGhpcylcblxuICAgICAgICAvL3RoaXMubGVmdEZyb250V2hlZWwuYmluZFRvKHRoaXMucmlnaHRGcm9udFdoZWVsKVxuICAgICAgICB0aGlzLmxlZnRCYWNrV2hlZWwgPSBuZXcgV2hlZWwoLSh0aGlzLndpZHRoIC8gMiksIC0odGhpcy5oZWlnaHQgLyAzKSwgdGhpcyk7XG4gICAgICAgIHRoaXMucmlnaHRCYWNrV2hlZWwgPSBuZXcgV2hlZWwodGhpcy53aWR0aCAvIDIsIC0odGhpcy5oZWlnaHQgLyAzKSwgdGhpcyk7XG4gICAgICAgIHRoaXMud2hlZWxzID0gW3RoaXMubGVmdEZyb250V2hlZWwsIHRoaXMucmlnaHRGcm9udFdoZWVsLCB0aGlzLmxlZnRCYWNrV2hlZWwsIHRoaXMucmlnaHRCYWNrV2hlZWxdO1xuICAgICAgICB0aGlzLnN0ZWVyaW5nID0gbmV3IFdoZWVscyh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGVlcmluZy5hZGRGcm9udFdoZWVsKHRoaXMubGVmdEZyb250V2hlZWwpO1xuICAgICAgICB0aGlzLnN0ZWVyaW5nLmFkZEZyb250V2hlZWwodGhpcy5yaWdodEZyb250V2hlZWwpO1xuXG4gICAgICAgIC8vdGhpcy5zdGVlcmluZy5hZGRGcm9udFdoZWVsKHRoaXMubWlkTGVmdEZyb250V2hlZWwpO1xuICAgICAgICAvL3RoaXMuc3RlZXJpbmcuYWRkRnJvbnRXaGVlbCh0aGlzLm1pZFJpZ2h0RnJvbnRXaGVlbCk7XG5cbiAgICAgICAgdGhpcy5zdGVlcmluZy5hZGRCYWNrV2hlZWwodGhpcy5sZWZ0QmFja1doZWVsKTtcbiAgICAgICAgdGhpcy5zdGVlcmluZy5hZGRCYWNrV2hlZWwodGhpcy5yaWdodEJhY2tXaGVlbCk7XG5cbiAgICAgICAgdGhpcy5zdGVlckluY3JlbWVudCA9IGZ1bmN0aW9uIChpbmNyZW1lbnQpIHtcbiAgICAgICAgICAgIC8vdGhpcy5sZWZ0RnJvbnRXaGVlbC5pbmNyZW1lbnQoaW5jcmVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3RlZXJpbmcuaW5jcmVtZW50KGluY3JlbWVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ibGlua2Vyc0xlZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ibGlua2VycyAhPSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibGlua2VycyA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJsaW5rZXJzUmlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ibGlua2VycyAhPSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibGlua2VycyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ibGlua2Vyc1Jlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ibGlua2VycyA9IDA7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ibGlua2Vyc1dhcm5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmJsaW5rZXJzID0gMjtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uIChlbnYpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHRoaXMud2hlZWxzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aGVlbHNbaW5kZXhdLnJlbmRlcihlbnYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbnYubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgIGVudi5zdHJva2VTdHlsZSA9IFwiIzY2NlwiO1xuICAgICAgICAgICAgZW52LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgZW52Lm1vdmVUbyh0aGlzLmZyb250Q29vcmQueCwgdGhpcy5mcm9udENvb3JkLnkpO1xuICAgICAgICAgICAgZW52LmxpbmVUbyh0aGlzLmJhY2tDb29yZC54LCB0aGlzLmJhY2tDb29yZC55KTtcbiAgICAgICAgICAgIGVudi5zdHJva2UoKTtcblxuICAgICAgICAgICAgLypcblx0XHRlbnYuc3Ryb2tlU3R5bGUgPSBcIiMyMjIyRkZcIjtcblx0XHRlbnYubGluZVdpZHRoID0gMVxuXHRcdGVudi5iZWdpblBhdGgoKTtcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMuZ2V0QWNrZXJtYW5SYWRpdXMoKSlcblx0XHRhY2sgPSB0aGlzLnN0ZWVyaW5nLmdldEFja2VybWFucG9zKClcblx0XHRlbnYuYXJjKGFjay54LCBhY2sueSwgdGhpcy5kQ2VudGVyQWNrLCAwLCAyKk1hdGguUEksIGZhbHNlKVxuXHRcdGVudi5zdHJva2UoKSovXG5cbiAgICAgICAgICAgIC8qXG5cdFx0ZW52LmxpbmVXaWR0aCA9MlxuXHRcdGVudi5zdHJva2VTdHlsZSA9IFwiI0ZGMjIyMlwiO1xuXHRcdGVudi5iZWdpblBhdGgoKTtcbiAgICAgIFx0XHRlbnYubW92ZVRvKHRoaXMueHBvcywgdGhpcy55cG9zKTtcbiAgICAgIFx0XHRlbnYubGluZVRvKHRoaXMudGFyZ2V0WCwgdGhpcy50YXJnZXRZKTtcbiAgICAgIFx0XHRlbnYuc3Ryb2tlKCk7Ki9cbiAgICAgICAgICAgIHRoaXMuc3RlZXJpbmcucmVuZGVyKGVudik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgTG9hZEltYWdlVG9DYW52YXMoXG4gICAgICAgICAgICAgICAgICAgIGVudixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9iaixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54cG9zLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnlwb3MsXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLmhlYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGggLyAyICsgdGhpcy5pbWFnZVhvZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0IC8gMiArIHRoaXMuaW1hZ2VZb2Zmc2V0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vRHJhdyBicmFraW5nIGxpZ2h0czpcblxuICAgICAgICAgICAgaWYgKHRoaXMuYnJha2luZyA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBGaWxsIHdpdGggZ3JhZGllbnRcbiAgICAgICAgICAgICAgICBlbnYuZmlsbFN0eWxlID0gZ3JkO1xuXG4gICAgICAgICAgICAgICAgZW52LmJlZ2luUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGxlZnRMaWdodFBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oLTAuNSAqIHRoaXMubGVuZ3RoLCAwLjQgKiB0aGlzLndpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgZ3JkID0gZW52LmNyZWF0ZVJhZGlhbEdyYWRpZW50KFxuICAgICAgICAgICAgICAgICAgICBsZWZ0TGlnaHRQb3MueCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdExpZ2h0UG9zLnksXG4gICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIGxlZnRMaWdodFBvcy54LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0TGlnaHRQb3MueSxcbiAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZ3JkLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMjU1LDAsMCwxKVwiKTtcbiAgICAgICAgICAgICAgICBncmQuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgyNTUsMCwwLDApXCIpO1xuXG4gICAgICAgICAgICAgICAgZW52LmFyYyhsZWZ0TGlnaHRQb3MueCwgbGVmdExpZ2h0UG9zLnksIDUsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZW52LmZpbGxTdHlsZSA9IGdyZDtcbiAgICAgICAgICAgICAgICBlbnYuZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJpZ2h0TGlnaHRQb3MgPSB0aGlzLmdldFBvc2l0aW9uKC0wLjUgKiB0aGlzLmxlbmd0aCwgLTAuNCAqIHRoaXMud2lkdGgpO1xuICAgICAgICAgICAgICAgIHZhciBncmQgPSBlbnYuY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0TGlnaHRQb3MueCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRMaWdodFBvcy55LFxuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICByaWdodExpZ2h0UG9zLngsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0TGlnaHRQb3MueSxcbiAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZ3JkLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMjU1LDAsMCwxKVwiKTtcbiAgICAgICAgICAgICAgICBncmQuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgyNTUsMCwwLDApXCIpO1xuXG4gICAgICAgICAgICAgICAgZW52LmZpbGxTdHlsZSA9IGdyZDtcbiAgICAgICAgICAgICAgICBlbnYuYXJjKHJpZ2h0TGlnaHRQb3MueCwgcmlnaHRMaWdodFBvcy55LCA1LCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGVudi5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0RyYXcgYmxpbmtlcnM6XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmJsaW5rZXJzICE9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJsaW5rZXJJdGVyYXRpb24gKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ibGlua2VySXRlcmF0aW9uID4gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibGlua2VySXRlcmF0aW9uID0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ibGlua2VycyA9PSAtMSB8fCB0aGlzLmJsaW5rZXJzID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZW52LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVmdExpZ2h0UG9zID0gdGhpcy5nZXRQb3NpdGlvbigtMC40NyAqIHRoaXMubGVuZ3RoLCAwLjQyICogdGhpcy53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBncmQgPSBlbnYuY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0TGlnaHRQb3MueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRMaWdodFBvcy55LFxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRMaWdodFBvcy54LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdExpZ2h0UG9zLnksXG4gICAgICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGdyZC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDI1NSwxNTAsMCxcIiArIE1hdGgubWF4KDUgLyB0aGlzLmJsaW5rZXJJdGVyYXRpb24sIDApICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICBncmQuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgyNTUsMTUwLDAsMClcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgZW52LmFyYyhsZWZ0TGlnaHRQb3MueCwgbGVmdExpZ2h0UG9zLnksIDUsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGVudi5maWxsU3R5bGUgPSBncmQ7XG4gICAgICAgICAgICAgICAgICAgIGVudi5maWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmxpbmtlcnMgPT0gMSB8fCB0aGlzLmJsaW5rZXJzID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZW52LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmlnaHRMaWdodFBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oLTAuNDcgKiB0aGlzLmxlbmd0aCwgLTAuNDIgKiB0aGlzLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdyZCA9IGVudi5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0TGlnaHRQb3MueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0TGlnaHRQb3MueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodExpZ2h0UG9zLngsXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodExpZ2h0UG9zLnksXG4gICAgICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGdyZC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDI1NSwxNTAsMCxcIiArIE1hdGgubWF4KDUgLyB0aGlzLmJsaW5rZXJJdGVyYXRpb24sIDApICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICBncmQuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgyNTUsMTUwLDAsMClcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgZW52LmZpbGxTdHlsZSA9IGdyZDtcbiAgICAgICAgICAgICAgICAgICAgZW52LmFyYyhyaWdodExpZ2h0UG9zLngsIHJpZ2h0TGlnaHRQb3MueSwgNSwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgZW52LmZpbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5icmFrZVJldmVyc2UgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXZlcnNlID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUudHJvdHRsZURvd25Ub1plcm8oMC4xKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJyYWtpbmcgPSA1O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZmb3J3YXJkIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUudHJvdHRsZURvd24odmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmJyYWtlID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gICAgICAgICAgICBpZiAocG93ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5lbmdpbmUudHJvdHRsZURvd25Ub1plcm8oMC4zKTtcbiAgICAgICAgICAgIHRoaXMuYnJha2luZyA9IHBvd2VyIHwgNTtcbiAgICAgICAgICAgIGlmICh0aGlzLnZmb3J3YXJkIDwgMC4wMDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZmb3J3YXJkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKHJlbFgsIHJlbFkpIHtcbiAgICAgICAgICAgIHRoaXMuYWxwaGEgPSB0aGlzLmhlYWRpbmc7XG4gICAgICAgICAgICAvKlxuXHRcdHRoaXMuY29tcG9uZW50QWxwaGEgPSBNYXRoLlBJIC0gdGhpcy5hbHBoYSAtIE1hdGguYXRhbihyZWxYIC8gcmVsWSlcbiBcdFx0dGhpcy5jb21wb25lbnQgPSBNYXRoLmNvcyh0aGlzLmNvbXBvbmVudEFscGhhKSpyZWxZXG5cdFx0Ly9DYWxjdWxhdGUgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBmcm9udCBhbmQgYmFjayBvZiB0aGUgY2FyIDopXG5cdFx0cmV0dXJuKCBuZXcgQ29vcmQoIHRoaXMueHBvcyArIE1hdGguY29zKHRoaXMuY29tcG9uZW50QWxwaGEpKnRoaXMuY29tcG9uZW50LCB0aGlzLnlwb3MgKyBNYXRoLnNpbih0aGlzLmNvbXBvbmVudEFscGhhKSp0aGlzLmNvbXBvbmVudCkpO1x0XHRcblx0XHQqL1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb29yZChcbiAgICAgICAgICAgICAgICB0aGlzLnhwb3MgKyByZWxZICogTWF0aC5jb3MoLXRoaXMuYWxwaGEpIC0gcmVsWCAqIE1hdGguc2luKC10aGlzLmFscGhhKSxcbiAgICAgICAgICAgICAgICB0aGlzLnlwb3MgKyByZWxZICogTWF0aC5zaW4oLXRoaXMuYWxwaGEpICsgcmVsWCAqIE1hdGguY29zKC10aGlzLmFscGhhKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uRnJvbUJhY2sgPSBmdW5jdGlvbiAoYWNrLCBhY2tEaXN0LCBkaXN0YW5jZSkge1xuICAgICAgICAgICAgLy9hY2sueCA9IGFjay54IC0gdGhpcy5iYWNrQ29vcmQueDtcbiAgICAgICAgICAgIC8vYWNrLnkgPSBhY2sueSAtIHRoaXMuYmFja0Nvb3JkLnk7XG5cbiAgICAgICAgICAgIHZhciBhY2tUb0JhY2tEaXN0YW5jZSA9IGFja0Rpc3Q7XG4gICAgICAgICAgICAvL0Rpc3RhbmNlIEJhY2sgdG8gY2VudGVyID1cbiAgICAgICAgICAgIHZhciBkQmFja0NlbnRlciA9IHRoaXMuc3RlZXJpbmcuY2VudGVyT2ZCYWNrV2hlZWxzO1xuICAgICAgICAgICAgLy9EaXN0YW5jZSBiYWNrIHRvIGFjayBjZW50ZXJcbiAgICAgICAgICAgIC8vPSBhY2tUb0JhY2tEaXN0YW5jZVxuICAgICAgICAgICAgdmFyIGRDZW50ZXJBY2sgPSBNYXRoLnNxcnQoZEJhY2tDZW50ZXIgKiBkQmFja0NlbnRlciArIGFja1RvQmFja0Rpc3RhbmNlICogYWNrVG9CYWNrRGlzdGFuY2UpO1xuICAgICAgICAgICAgLy9cdHJvdGF0aW9uID0gdGhpcy5oZWFkaW5nICsgcm90YXRpb25cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coIGRDZW50ZXJBY2sqTWF0aC5zaW4ocm90YXRpb24pLCBkQ2VudGVyQWNrKk1hdGguY29zKHJvdGF0aW9uKS10aGlzLndpZHRoKVxuICAgICAgICAgICAgLy9OZXcgY29vcmRpbmF0ZXMgYXJlOlxuXG4gICAgICAgICAgICB0aGlzLmRDZW50ZXJBY2sgPSBkQ2VudGVyQWNrO1xuXG4gICAgICAgICAgICB0aGlzLmJhY2tXaGVlbHNQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy5zdGVlcmluZy5jZW50ZXJPZkJhY2tXaGVlbHMsIDApO1xuXG4gICAgICAgICAgICB2YXIgeCA9IHRoaXMueHBvcyAtIGFjay54O1xuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLnlwb3MgLSBhY2sueTtcblxuICAgICAgICAgICAgdmFyIEEgPSBNYXRoLmF0YW4yKHgsIHkpO1xuICAgICAgICAgICAgLy9kaXN0YW5jZVxuXG4gICAgICAgICAgICBpZiAoYWNrRGlzdCA8IDApIHtcbiAgICAgICAgICAgICAgICBhbmd1bGFyU3BlZWQgPSAtKGRpc3RhbmNlIC8gKE1hdGguUEkgKiAyLjAgKiB0aGlzLmRDZW50ZXJBY2spKSAqIE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmd1bGFyU3BlZWQgPSAoZGlzdGFuY2UgLyAoTWF0aC5QSSAqIDIuMCAqIHRoaXMuZENlbnRlckFjaykpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRhcmdldFggPSBhY2sueCArIGRDZW50ZXJBY2sgKiBNYXRoLnNpbihBICsgYW5ndWxhclNwZWVkKTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0WSA9IGFjay55ICsgZENlbnRlckFjayAqIE1hdGguY29zKEEgKyBhbmd1bGFyU3BlZWQpO1xuICAgICAgICAgICAgdGhpcy5oZWFkaW5nICs9IGFuZ3VsYXJTcGVlZDtcblxuICAgICAgICAgICAgdGhpcy54cG9zID0gdGhpcy50YXJnZXRYO1xuICAgICAgICAgICAgdGhpcy55cG9zID0gdGhpcy50YXJnZXRZO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRDZW50ZXJBY2sqTWF0aC5jb3Mocm90YXRpb24pKVxuICAgICAgICAgICAgLy90aGlzLnlwb3MgKz0gZENlbnRlckFjaypNYXRoLmNvcyhyb3RhdGlvbilcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZyb250Q29vcmQgPSBuZXcgQ29vcmQodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICB0aGlzLmJhY2tDb29yZCA9IG5ldyBDb29yZCh0aGlzLngsIHRoaXMueSk7XG5cbiAgICAgICAgdGhpcy50aWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmV2ZXJzZSA9PSB0cnVlICYmIHRoaXMudmZvcndhcmQgPiAwLjAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmJyYWtpbmcgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52Zm9yd2FyZCAqPSAwLjk1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnJha2luZyAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy90aGlzLnN0ZWVyaW5nLnJlZHVjZSgpO1xuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IHRoaXMuaGVhZGluZztcbiAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgZnJvbnQgYW5kIGJhY2sgb2YgdGhlIGNhciA6KVxuICAgICAgICAgICAgeE9mZnNldCA9IE1hdGguc2luKHRoaXMuYWxwaGEpICogMC41ICogdGhpcy5sZW5ndGg7XG4gICAgICAgICAgICB5T2Zmc2V0ID0gTWF0aC5jb3ModGhpcy5hbHBoYSkgKiAwLjUgKiB0aGlzLmxlbmd0aDtcblxuICAgICAgICAgICAgdGhpcy5mcm9udENvb3JkLnggPSB4T2Zmc2V0ICsgdGhpcy54cG9zO1xuICAgICAgICAgICAgdGhpcy5mcm9udENvb3JkLnkgPSB5T2Zmc2V0ICsgdGhpcy55cG9zO1xuICAgICAgICAgICAgdGhpcy5iYWNrQ29vcmQueCA9IHRoaXMueHBvcyAtIHhPZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLmJhY2tDb29yZC55ID0gdGhpcy55cG9zIC0geU9mZnNldDtcblxuICAgICAgICAgICAgdGhpcy5lbmdpbmUudGljaygpO1xuICAgICAgICAgICAgdmFyIGYgPSB0aGlzLmVuZ2luZS5nZXRGb3JjZSgpO1xuXG4gICAgICAgICAgICB0aGlzLnZmb3J3YXJkICs9IGY7XG4gICAgICAgICAgICB0aGlzLnZmb3J3YXJkICo9IHRoaXMuZnJpY3Rpb247XG5cbiAgICAgICAgICAgIHZhciByID0gdGhpcy5zdGVlcmluZy5zdGVlckRpc3Q7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocikgPiAwICYmIE1hdGguYWJzKHIpIDwgMTAwMCkge1xuICAgICAgICAgICAgICAgIHZhciBhY2tlckFscGhhTW92ZW1lbnQgPSBNYXRoLmFzaW4oKDAuNSAqIHRoaXMudmZvcndhcmQpIC8gcikgLyAyO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5keEFja2VyID0gciAqIE1hdGguc2luKGFja2VyQWxwaGFNb3ZlbWVudCkgLSByICogTWF0aC5zaW4oMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5keUFja2VyID0gciAqIE1hdGguY29zKGFja2VyQWxwaGFNb3ZlbWVudCkgLSByICogTWF0aC5jb3MoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbkZyb21CYWNrKHRoaXMuc3RlZXJpbmcuZ2V0QWNrZXJtYW5wb3MoKSwgciwgdGhpcy52Zm9yd2FyZCk7XG5cbiAgICAgICAgICAgICAgICAvL3RoaXMueHBvcyArPSB0aGlzLmR4QWNrZXJcbiAgICAgICAgICAgICAgICAvL3RoaXMueXBvcyArPSB0aGlzLmR5QWNrZXJcblxuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRpb25zICUgMTAgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RlZXJpbmcuZ2V0UmVsYXRpdmVBY2tlcm1hblBvcygpKVxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudmZvcndhcmQpXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5keUFja2VyLCB0aGlzLmR4QWNrZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhwb3MgKz0gdGhpcy52Zm9yd2FyZCAqIE1hdGguc2luKHRoaXMuaGVhZGluZyk7XG4gICAgICAgICAgICAgICAgdGhpcy55cG9zICs9IHRoaXMudmZvcndhcmQgKiBNYXRoLmNvcyh0aGlzLmhlYWRpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9DYWxjdWxhdGUgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBmcm9udCBhbmQgYmFjayBvZiB0aGUgY2FyIDopXG4gICAgICAgICAgICB4T2Zmc2V0ID0gTWF0aC5zaW4odGhpcy5hbHBoYSkgKiAwLjUgKiB0aGlzLmxlbmd0aDtcbiAgICAgICAgICAgIHlPZmZzZXQgPSBNYXRoLmNvcyh0aGlzLmFscGhhKSAqIDAuNSAqIHRoaXMubGVuZ3RoO1xuXG4gICAgICAgICAgICB0aGlzLmZyb250Q29vcmQueCA9IHhPZmZzZXQgKyB0aGlzLnhwb3M7XG4gICAgICAgICAgICB0aGlzLmZyb250Q29vcmQueSA9IHlPZmZzZXQgKyB0aGlzLnlwb3M7XG4gICAgICAgICAgICB0aGlzLmJhY2tDb29yZC54ID0gdGhpcy54cG9zIC0geE9mZnNldDtcbiAgICAgICAgICAgIHRoaXMuYmFja0Nvb3JkLnkgPSB0aGlzLnlwb3MgLSB5T2Zmc2V0O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGVlcmluZy5zdGVlckFuZ2xlID4gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuYmxpbmtlcnNSaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0ZWVyaW5nLnN0ZWVyQW5nbGUgPCAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibGlua2Vyc0xlZnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibGlua2Vyc1Jlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudGljaygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNob3J0QW5nbGUoYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNvcyhhMSAtIGEyICsgTWF0aC5QSSAvIDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIERyaXZlUm91dGVQb2ludCh4LCB5LCBpc0ZpbmFsKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuaXNGaW5hbCA9IGlzRmluYWwgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKGVudikge1xuICAgICAgICAgICAgZW52LmZpbGxTdHlsZSA9IFwicmdiYSgzMCwxMjAsMCwwLjgpXCI7XG4gICAgICAgICAgICBlbnYucmVjdCh0aGlzLnggLSA1LCB0aGlzLnkgLSA1LCAxMCwgMTApO1xuICAgICAgICAgICAgZW52LmZpbGwoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBEcml2ZXIoY2FyKSB7XG4gICAgICAgIHRoaXMuY2FyID0gY2FyO1xuICAgICAgICAvL3RoaXMuZHJpdmVSb3V0ZSA9IFtuZXcgRHJpdmVSb3V0ZVBvaW50KDMwMCwzMDApLCBuZXcgRHJpdmVSb3V0ZVBvaW50KDEwMCwzMDApLCBuZXcgRHJpdmVSb3V0ZVBvaW50KDEwMCwxMDApLCBuZXcgRHJpdmVSb3V0ZVBvaW50KDMwMCwzMDApICBdXG4gICAgICAgIHRoaXMuZHJpdmVSb3V0ZSA9IFtuZXcgRHJpdmVSb3V0ZVBvaW50KDMwMCwgMzAwKV07XG5cbiAgICAgICAgdGhpcy5yZWFjaGVkVGFyZ2V0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5icmVha09uRW5kID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5icmVha2luZ0Rpc3RhbmNlID0gMzAwOyAvLzMwXG4gICAgICAgIHRoaXMuc2xvd1NwZWVkID0gMC4zO1xuICAgICAgICB0aGlzLm5vcm1hbFNwZWVkID0gNTtcbiAgICAgICAgdGhpcy50YXJnZXRSZWFjaGVkRGlzdGFuY2UgPSAxNzA7IC8vMTVcblxuICAgICAgICB0aGlzLmNob29zZVR1cm5Bcm91bmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWNoZWRUYXJnZXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhci52Zm9yd2FyZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXIuZW5naW5lLnNldFRyb3R0bGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyLmJyYWtlKDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyLmVuZ2luZS5zZXRUcm90dGxlKDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhci5icmFrZSgwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vQ2FsY3VsYXRlIGRlc2lyZWQgaGVhZGluZyB0byB0YXJnZXQ6XG4gICAgICAgICAgICB0aGlzLmhlYWRpbmdUb1RhcmdldCA9IE1hdGguYXRhbjIoXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0LnggLSB0aGlzLmNhci54cG9zLFxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhcmdldC55IC0gdGhpcy5jYXIueXBvc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy9DYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgaW4gaGVhZGluZzpcbiAgICAgICAgICAgIHRoaXMuaGVhZGluZ0RlbHRhID0gdGhpcy5jYXIuaGVhZGluZyAtIHRoaXMuaGVhZGluZ1RvVGFyZ2V0O1xuXG4gICAgICAgICAgICAvL0NhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgdG8gdGhlIHRhcmdldDpcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2VUb1RhcmdldCA9IE1hdGguc3FydChcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyh0aGlzLmNhci54cG9zIC0gdGhpcy5jdXJyZW50VGFyZ2V0LngsIDIpICsgTWF0aC5wb3codGhpcy5jYXIueXBvcyAtIHRoaXMuY3VycmVudFRhcmdldC55LCAyKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzdGFuY2VUb1RhcmdldCA8PSB0aGlzLnRhcmdldFJlYWNoZWREaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhY2hlZFRhcmdldCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXIudmZvcndhcmQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyLmJyYWtlKDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhci5lbmdpbmUuc2V0VHJvdHRsZSgwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdvdG9OZXh0VGFyZ2V0KHRoaXMuY3VycmVudFRhcmdldC5pc0ZpbmFsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucmVhY2hlZFRhcmdldCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0RvIHdlIHN0YW5kIHN0aWxsIGFuZCBkbyB3ZSBuZWVkIHRvIGRyaXZlP1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzdGFuY2VUb1RhcmdldCA+PSB0aGlzLmJyZWFraW5nRGlzdGFuY2UgJiYgdGhpcy5jYXIudmZvcndhcmQgPCB0aGlzLm5vcm1hbFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXIuZW5naW5lLnRyb3R0bGVVcCgwLjAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzdGFuY2VUb1RhcmdldCA8IHRoaXMuYnJlYWtpbmdEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhci52Zm9yd2FyZCA+IHRoaXMuc2xvd1NwZWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhci52Zm9yd2FyZCA+IHRoaXMuc2xvd1NwZWVkICogMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXIuYnJha2UoMC45OCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhci5icmFrZSgwLjMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyLmVuZ2luZS50cm90dGxlVXAoMC4wNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL1N0ZWVyIHRoZSB3aGVlbHM7XG4gICAgICAgICAgICAvL0hpZ2ggaGVhZGluZyBkZWx0YSA9IHNoYXJwIHN0ZWVyaW5nLCBsb3c6IGNlbnRlciB0aGUgc3RlZXJpbmdcblxuICAgICAgICAgICAgdGhpcy5zdGVlcmluZ0RlbHRhID0gZ2V0U2hvcnRBbmdsZShcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRpbmdUb1RhcmdldCxcbiAgICAgICAgICAgICAgICB0aGlzLmNhci5oZWFkaW5nIC0gdGhpcy5jYXIuc3RlZXJpbmcuc3RlZXJBbmdsZSArIDAuNSAqIE1hdGguUElcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RlZXJpbmdDb3JyZWN0aW9uID0gdGhpcy5zdGVlcmluZ0RlbHRhICogMC42O1xuXG4gICAgICAgICAgICB0aGlzLnNoYXJwZXN0U3RlZXJpbmdDb3JyZWN0aW9uID0gMC4yO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGVlcmluZ0NvcnJlY3Rpb24gPiB0aGlzLnNoYXJwZXN0U3RlZXJpbmdDb3JyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGVlcmluZ0NvcnJlY3Rpb24gPSB0aGlzLnNoYXJwZXN0U3RlZXJpbmdDb3JyZWN0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGVlcmluZ0NvcnJlY3Rpb24gPCAtdGhpcy5zaGFycGVzdFN0ZWVyaW5nQ29ycmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RlZXJpbmdDb3JyZWN0aW9uID0gLXRoaXMuc2hhcnBlc3RTdGVlcmluZ0NvcnJlY3Rpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vaWYgKE1hdGguYWJzKHRoaXMuc3RlZXJpbmdEZWx0YSk+Mikge1xuICAgICAgICAgICAgLy90aGlzLmNhci5zdGVlcmluZy5pbmNyZW1lbnQoMC4xKVxuICAgICAgICAgICAgLy99IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmNhci5zdGVlcmluZy5pbmNyZW1lbnQodGhpcy5zdGVlcmluZ0NvcnJlY3Rpb24pO1xuICAgICAgICAgICAgLy99XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wb3BOZXh0VGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJpdmVSb3V0ZS5zaGlmdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZ290b05leHRUYXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5wb3BOZXh0VGFyZ2V0KCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRoaXMucmVhY2hlZFRhcmdldCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5icmFrZU9uRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyLmVuZ2luZS50cm90dGxlRG93bigwLjkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhci5icmFrZSgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYXIuYmxpbmtlcnNXYXJuaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ290b05leHRUYXJnZXQoKTtcblxuICAgICAgICB0aGlzLnNldFRhcmdldCA9IGZ1bmN0aW9uIChjb29yZCkge1xuICAgICAgICAgICAgdGhpcy5yZWFjaGVkVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXQgPSBjb29yZDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uIChlbnYpIHtcbiAgICAgICAgICAgIGVudi5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgZW52LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDgwLDI1NSw4MCwwLjQpXCI7XG4gICAgICAgICAgICBlbnYuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBlbnYubW92ZVRvKHRoaXMuY2FyLnhwb3MsIHRoaXMuY2FyLnlwb3MpO1xuICAgICAgICAgICAgZW52LmxpbmVUbyh0aGlzLmN1cnJlbnRUYXJnZXQueCwgdGhpcy5jdXJyZW50VGFyZ2V0LnkpO1xuICAgICAgICAgICAgZW52LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAvKlxuXHRcdGVudi5mb250PVwiMjBweCBHZW9yZ2lhXCI7XG5cdFx0ZW52LmZpbGxUZXh0KHRoaXMuc3RlZXJpbmdEZWx0YSx0aGlzLmNhci54cG9zKzMwLHRoaXMuY2FyLnlwb3MrMzApO1xuXHRcdCovXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB0aGlzLmRyaXZlUm91dGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyaXZlUm91dGVbaW5kZXhdLnJlbmRlcihlbnYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHN1YmRpdmlkZU92ZXIoeFN0YXJ0LCB5U3RhcnQsIHhFbmQsIHlFbmQsIG1pbkRpc3RhbmNlKSB7XG4gICAgLy8gICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIoeEVuZCAtIHhTdGFydCwgeUVuZCAtIHlTdGFydCk7XG4gICAgLy8gICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyh4RW5kIC0geFN0YXJ0LCAyKSArIE1hdGgucG93KHlFbmQgLSB5U3RhcnQsIDIpKTtcbiAgICAvLyAgICAgLy8gdmFyIGFtb3VudCA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyBtaW5EaXN0YW5jZSk7XG4gICAgLy8gICAgIHZhciBjb29yZHMgPSBbXTtcbiAgICAvLyAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkaXN0YW5jZTsgZCArPSBtaW5EaXN0YW5jZSkge1xuICAgIC8vICAgICAgICAgLy9QcmVjYWxjIGNvcyBhbmQgc2luIHRvIG1ha2UgdGhpcyBmYXN0ZXIgOilcbiAgICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coZClcbiAgICAvLyAgICAgICAgIGNvb3Jkcy5wdXNoKG5ldyBDb29yZCh4U3RhcnQgKyBNYXRoLnNpbihhbmdsZSkgKiBkLCB5U3RhcnQgKyBNYXRoLmNvcyhhbmdsZSkgKiBkKSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIGNvb3JkcztcbiAgICAvLyB9XG5cbiAgICBXZWdtZXVidWxhaXIgPSB7fTtcblxuICAgIFdlZ21ldWJ1bGFpci5weWxvbiA9IGZ1bmN0aW9uICh4LCB5LCByb3RhdGlvbikge1xuICAgICAgICB0aGlzLnhwb3MgPSB4IHx8IDMwO1xuICAgICAgICB0aGlzLnlwb3MgPSB5IHx8IDMwO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb24gfCAwO1xuICAgICAgICBjb25zb2xlLmxvZyh4LCB5KTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoZW52KSB7XG4gICAgICAgICAgICBlbnYuc3Ryb2tlU3R5bGUgPSBcIiNBQTAwMDBcIjtcbiAgICAgICAgICAgIGVudi5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgZW52LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgZW52LnJlY3QodGhpcy54cG9zIC0gMy4wLCB0aGlzLnlwb3MgLSAzLjAsIDYsIDYpO1xuICAgICAgICAgICAgZW52LnN0cm9rZSgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBXZWdtZXVidWxhaXIudGFybWFjMTAgPSBmdW5jdGlvbiAoeCwgeSwgcm90YXRpb24pIHtcbiAgICAgICAgdGhpcy54cG9zID0geCB8fCAxMDtcbiAgICAgICAgdGhpcy55cG9zID0geSB8fCAxMDtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uIHwgMDtcbiAgICAgICAgY29uc29sZS5sb2coeCwgeSk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKGVudikge1xuICAgICAgICAgICAgZW52LnN0cm9rZVN0eWxlID0gXCIjQUEwMDAwXCI7XG4gICAgICAgICAgICBlbnYubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgIGVudi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGVudi5yZWN0KHRoaXMueHBvcyAtIDMuMCwgdGhpcy55cG9zIC0gMy4wLCA2LCA2KTtcbiAgICAgICAgICAgIGVudi5zdHJva2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50aWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy54cG9zICs9IDAuMDE7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qXG5XZWdtZXVidWxhaXJfcHlsb25uZW4gPSBmdW5jdGlvbih4U3RhcnQsIHlTdGFydCwgeEVuZCwgeUVuZCwgZGlzdGFuY2VCZXR3ZWVuKXtcdFx0XG5cdFx0dGhpcy54U3RhcnQgPSB4U3RhcnQ7XG5cdFx0dGhpcy55U3RhcnQgPSB5U3RhcnQ7XG5cdFx0dGhpcy54RW5kID0geEVuZDtcblx0XHR0aGlzLnlFbmQgPSB5RW5kO1xuXHRcdHRoaXMucHlsb25Qb3NpdGlvbnMgPSBzdWJkaXZpZGVPdmVyKHhTdGFydCwgeVN0YXJ0LCB4RW5kLCB5RW5kLCBkaXN0YW5jZUJldHdlZW4pXHRcdFxuXHRcdHRoaXMucmVuZGVyID0gZnVuY3Rpb24oZW52KXtcblx0XHRcdGVudi5zdHJva2VTdHlsZSA9IFwiI0FBMDAwMFwiO1xuXHRcdFx0ZW52LmxpbmVXaWR0aD0yO1xuXHRcdFx0Zm9yKHZhciBpIGluIHRoaXMucHlsb25Qb3NpdGlvbnMpe1xuXHRcdFx0XHRlbnYuYmVnaW5QYXRoKCk7XHRcdFx0XG5cdFx0XHRcdGVudi5yZWN0KHRoaXMucHlsb25Qb3NpdGlvbnNbaV0ueC0zLHRoaXMucHlsb25Qb3NpdGlvbnNbaV0ueS0zLDYsNik7XG5cdFx0XHRcdGVudi5zdHJva2UoKTtcblx0XHRcdH1cdFx0XHRcblxuXG5cdFx0fVx0XG5cdFx0XG5cblx0fVxuXG4qL1xuXG4gICAgLy8gZnVuY3Rpb24gUm91dGVQb2ludCh4LCB5LCBpZCkge1xuICAgIC8vICAgICB0aGlzLmlkID0gaWQgfHwgXCJ1bnNldFwiO1xuICAgIC8vICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IENvb3JkKHgsIHkpO1xuICAgIC8vICAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uIChlbnYpIHtcbiAgICAvLyAgICAgICAgIGVudi5zdHJva2VTdHlsZSA9IFwiIzY2NjY2NlwiO1xuICAgIC8vICAgICAgICAgZW52LmZpbGxTdHlsZSA9IFwiIzY2NjY2NlwiO1xuICAgIC8vICAgICAgICAgZW52LmxpbmVXaWR0aCA9IDE7XG4gICAgLy8gICAgICAgICBlbnYuYmVnaW5QYXRoKCk7XG4gICAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2V0QWNrZXJtYW5SYWRpdXMoKSlcbiAgICAvLyAgICAgICAgIGVudi5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgLy8gICAgICAgICBlbnYuc3Ryb2tlKCk7XG4gICAgLy8gICAgICAgICBlbnYuZmlsbCgpO1xuICAgIC8vICAgICB9O1xuICAgIC8vICAgICB0aGlzLnNldElkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgLy8gICAgIH07XG4gICAgLy8gfVxuXG4gICAgLy8gZnVuY3Rpb24gUm91dGUoaWQpIHtcbiAgICAvLyAgICAgdGhpcy5wb2ludHMgPSB7fTtcbiAgICAvLyAgICAgdGhpcy5pZCA9IGlkO1xuICAgIC8vICAgICB0aGlzLnBvaW50SWRQb3NpdGlvbiA9IDA7XG4gICAgLy8gICAgIHRoaXMuYWRkUG9pbnQgPSBmdW5jdGlvbiAocm91dGVQb2ludCkge1xuICAgIC8vICAgICAgICAgdGhpcy5wb2ludHNbdGhpcy5wb2ludElkUG9zaXRpb25dID0gcm91dGVQb2ludDtcbiAgICAvLyAgICAgICAgIHRoaXMucG9pbnRJZFBvc2l0aW9uKys7XG4gICAgLy8gICAgIH07XG4gICAgLy8gfVxuXG4gICAgLy8gZnVuY3Rpb24gUm91dGVzKCkge1xuICAgIC8vICAgICAvL1xuICAgIC8vIH1cblxuICAgIC8vIGZ1bmN0aW9uIFJvYWRTZWN0aW9uKGlkKSB7XG4gICAgLy8gICAgIHRoaXMud2lkdGggPSAyMDA7XG4gICAgLy8gICAgIHRoaXMuaGVpZ2h0ID0gMjAwO1xuXG4gICAgLy8gICAgIHRoaXMudGljayA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLy8gICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKCkge307XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gTGV2ZWwoKSB7XG4gICAgICAgIC8qXG5cdC8vdyA9IG5ldyBXZWdtZXVidWxhaXIoKTtcblx0dGhpcy5vYmplY3RzID0gW11cblx0XG5cdC8vVmFrOlxuXHR0aGlzLm9iamVjdHMucHVzaChuZXcgV2VnbWV1YnVsYWlyX3B5bG9ubmVuKDIwMCwyMDAsMjUwLDIwMCwgMjApKVxuXHR0aGlzLm9iamVjdHMucHVzaChuZXcgV2VnbWV1YnVsYWlyX3B5bG9ubmVuKDI1MCwyMjAsMjUwLDQwMCwgMjApKVxuXHQqL1xuXG4gICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKGVudikge1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5vYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzW2luZGV4XS5yZW5kZXIoZW52KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBFZGl0b3JNb2RpID0ge307XG4gICAgRWRpdG9yTW9kaS5hcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wb2ludEEgPSBDb29yZCgpO1xuICAgICAgICB0aGlzLnBvaW50QiA9IENvb3JkKCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGVmdENsaWNrID0gZnVuY3Rpb24gKHBvc2l0aW9uLCBuKSB7XG4gICAgICAgICAgICBpZiAobiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludEEueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludEEueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobiA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludEIueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludEIueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIEF2YWlsYWJsZU9iamVjdHMgPSB7XG4gICAgICAgIFdlZ21ldWJ1bGFpcjoge1xuICAgICAgICAgICAgbmFtZTogXCJXZWdtZXVidWxhaXJcIixcbiAgICAgICAgICAgIGNvbnRlbnRzOiBXZWdtZXVidWxhaXIsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIEVkaXRvcihhcHBlbmRUbywgY2FudmlpKSB7XG4gICAgLy8gICAgICQoYXBwZW5kVG8pLmFwcGVuZCgnPGRpdiBpZD1cImVkaXRvclwiPjwvZGl2PicpO1xuXG4gICAgLy8gICAgIHRoaXMubW9kaSA9IFtcInBsYWNlXCIsIFwicGxhY2VfYXJyYXlcIl07XG4gICAgLy8gICAgIHRoaXMubW9kdXMgPSBcInBsYWNlX2FycmF5XCI7XG5cbiAgICAvLyAgICAgLy9BcnJheSB0b29sOlxuICAgIC8vICAgICB0aGlzLnBvaW50QSA9IG5ldyBDb29yZCgpO1xuICAgIC8vICAgICB0aGlzLnBvaW50QiA9IG5ldyBDb29yZCgpO1xuICAgIC8vICAgICB0aGlzLnRpbWVzQ2xpY2tlZCA9IDA7XG5cbiAgICAvLyAgICAgdGhpcy5wcm9jZXNzQXJyYXlUb29sQ2xpY2sgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXRhbG9nT2JqZWN0ID09IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMudGltZXNDbGlja2VkID0gMDtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgdGhpcy50aW1lc0NsaWNrZWQrKztcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnRpbWVzQ2xpY2tlZCA9PSAxKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5wb2ludEEueCA9IHg7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5wb2ludEEueSA9IHk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy50aW1lc0NsaWNrZWQgPT0gMikge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMucG9pbnRCLnggPSB4O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMucG9pbnRCLnkgPSB5O1xuXG4gICAgLy8gICAgICAgICAgICAgdmFyIHBvaW50cyA9IHN1YmRpdmlkZU92ZXIodGhpcy5wb2ludEEueCwgdGhpcy5wb2ludEEueSwgdGhpcy5wb2ludEIueCwgdGhpcy5wb2ludEIueSwgMjUpO1xuICAgIC8vICAgICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIHBvaW50cykge1xuICAgIC8vICAgICAgICAgICAgICAgICB3b3JsZC5hZGRPYmplY3QobmV3IHRoaXMuc2VsZWN0ZWRDYXRhbG9nT2JqZWN0KHBvaW50c1tpbmRleF0ueCwgcG9pbnRzW2luZGV4XS55KSk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIHRoaXMudGltZXNDbGlja2VkID0gMDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfTtcblxuICAgIC8vICAgICB0aGlzLm1vdXNlRG93biA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5tb2R1cyA9PSBcInBsYWNlXCIpIHtcbiAgICAvLyAgICAgICAgICAgICB3b3JsZC5hZGRPYmplY3QobmV3IHRoaXMuc2VsZWN0ZWRDYXRhbG9nT2JqZWN0KHgsIHkpKTtcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgaWYgKHRoaXMubW9kdXMgPT0gXCJwbGFjZV9hcnJheVwiKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5wcm9jZXNzQXJyYXlUb29sQ2xpY2soeCwgeSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgdGhpcy5kcmF3Q2F0YWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuaHRtbCA9IFwiXCI7XG4gICAgLy8gICAgICAgICBmb3IgKHZhciBncm91cElkIGluIEF2YWlsYWJsZU9iamVjdHMpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmh0bWwgKz0gJzxkaXYgY2xhc3M9XCJlZGl0b3JDYXRhbG9nR3JvdXBcIj48aDM+JyArIEF2YWlsYWJsZU9iamVjdHNbZ3JvdXBJZF0ubmFtZSArIFwiPC9oMz5cIjtcblxuICAgIC8vICAgICAgICAgICAgIGZvciAodmFyIG9iamVjdElkIGluIEF2YWlsYWJsZU9iamVjdHNbZ3JvdXBJZF0uY29udGVudHMpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5odG1sICs9XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImVkaXRvckNhdGFsb2dPYmplY3RcIiBpZD1cIicgK1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZCArXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBcIl9cIiArXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBvYmplY3RJZCArXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnXCI+JyArXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBvYmplY3RJZCArXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnPGNhbnZhcyBpZD1cImNhbnZhc18nICtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWQgK1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgXCJfXCIgK1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SWQgK1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJ1wiPndpZHRoPVwiNzVweFwiIGhlaWdodD1cIjc1cHhcIj48L2NhbnZhcz48L2Rpdj4nO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB0aGlzLmh0bWwgKz0gXCI8L2Rpdj5cIjtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICQoXCIjZWRpdG9yXCIpLmh0bWwodGhpcy5odG1sKTtcblxuICAgIC8vICAgICAgICAgZm9yICh2YXIgZ3JvdXBJZCBpbiBBdmFpbGFibGVPYmplY3RzKSB7XG4gICAgLy8gICAgICAgICAgICAgZm9yICh2YXIgb2JqZWN0SWQgaW4gQXZhaWxhYmxlT2JqZWN0c1tncm91cElkXS5jb250ZW50cykge1xuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgY2FudmFzQ29udGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzX1wiICsgZ3JvdXBJZCArIFwiX1wiICsgb2JqZWN0SWQpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIG8gPSBuZXcgQXZhaWxhYmxlT2JqZWN0c1tncm91cElkXS5jb250ZW50c1tvYmplY3RJZF0oKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgby5yZW5kZXIoY2FudmFzQ29udGV4dCk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAkKFwiLmVkaXRvckNhdGFsb2dPYmplY3RcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSwgaSkge1xuICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmVkaXRvci5zZXRTZWxlY3RlZENhdGFsb2dPYmplY3QoZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICB0aGlzLnNlbGVjdGVkQ2F0YWxvZ09iamVjdCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZENhdGFsb2dPYmplY3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAvLyAgICAgICAgICAgICB2YXIgcGFydHMgPSBpZC5zcGxpdChcIl9cIik7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENhdGFsb2dPYmplY3QgPSBBdmFpbGFibGVPYmplY3RzW3BhcnRzWzBdXS5jb250ZW50c1twYXJ0c1sxXV07XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBcIiArIGlkICsgXCIgZnJvbSB0aGUgY2F0YWxvZ1wiKTtcbiAgICAvLyAgICAgICAgIH07XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgdGhpcy5kcmF3Q2F0YWxvZygpO1xuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIFdvcmxkKCkge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVggPSAwO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICB0aGlzLnZpZXdDZW50ZXJYID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy52aWV3Q2VudGVyWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnRhcmdldEZyYW1lVGltZSA9IDQwOyAvL1RpbWUgaW4gbWlsaXNlYyBwZXIgZnJhbWUsIHRvIHNldCBGUFMgdG8gNjAgPSAxMDAwLzYwID0+IDE2LjYsIDI0IGZwcyA9PiA0MVxuXG4gICAgICAgIHRoaXMubWF4UGFydGljbGVzID0gMTAwMDA7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlV29ybGQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB2YXIgdGlja1N0YXJ0ID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcblxuICAgICAgICAgICAgLy9SZWNhbGN1bGF0ZSBhbGwgb2JqZWN0IGlkJ3NcbiAgICAgICAgICAgIGlmICh0aGlzLnJlY2FsY3VsYXRlV29ybGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3T2JqZWN0cyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBwb2ludGVyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvYmplY3RJbmRleCBpbiB0aGlzLm9iamVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqZWN0c1tvYmplY3RJbmRleF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3T2JqZWN0cy5wdXNoKHRoaXMub2JqZWN0c1tvYmplY3RJbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzW29iamVjdEluZGV4XS53b3JsZElkID0gcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdHMgPSBuZXdPYmplY3RzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBvYmplY3RJbmRleCBpbiB0aGlzLm9iamVjdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmplY3RzW29iamVjdEluZGV4XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0c1tvYmplY3RJbmRleF0udGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgcGFydGljbGVJbmRleCBpbiB0aGlzLnBhcnRpY2xlcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iamVjdHNbb2JqZWN0SW5kZXhdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbcGFydGljbGVJbmRleF0udGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIHRpY2tFbmQgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcih0aWNrRW5kIC0gdGlja1N0YXJ0KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uICh0aWNrVGltZSkge1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIGZyYW1lU3RhcnQgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgICAgICAgICAgLy9FbXB0eSB0aGUgY2FudmFzXG4gICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgtMTAwMDAsIC0xMDAwMCwgMTAwMDAgKiBjYW52YXMud2lkdGgsIDEwMDAwICogY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSh0aGlzLnRyYW5zbGF0ZVgsIHRoaXMudHJhbnNsYXRlWSk7XG5cbiAgICAgICAgICAgIHRoaXMudmlld0NlbnRlclggPSB0aGlzLnZpZXdDZW50ZXJYIC0gdGhpcy50cmFuc2xhdGVYO1xuICAgICAgICAgICAgdGhpcy52aWV3Q2VudGVyWSA9IHRoaXMudmlld0NlbnRlclkgLSB0aGlzLnRyYW5zbGF0ZVk7XG5cbiAgICAgICAgICAgIHRoaXMubWluWCA9IHRoaXMudmlld0NlbnRlclggLSAwLjUgKiBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICB0aGlzLm1heFggPSB0aGlzLnZpZXdDZW50ZXJYICsgMC41ICogY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5taW5ZID0gdGhpcy52aWV3Q2VudGVyWSAtIDAuNSAqIGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLm1heFkgPSB0aGlzLnZpZXdDZW50ZXJZICsgMC41ICogY2FudmFzLmhlaWdodDtcblxuICAgICAgICAgICAgLy9EcmF3IGJhY2tncm91bmQgKEdyaWQpXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiIzA1MzA2NlwiO1xuICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCgtMTAwMDAsIC0xMDAwMCwgMTAwMDAgKiBjYW52YXMud2lkdGgsIDEwMDAwICogY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCIjREREREREXCI7XG5cbiAgICAgICAgICAgIHZhciBjZWxsU2l6ZSA9IDEwMDtcblxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IHRoaXMubWluWSAtICh0aGlzLnZpZXdDZW50ZXJZICUgY2VsbFNpemUpOyB5IDwgdGhpcy5tYXhZOyB5ICs9IGNlbGxTaXplKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyh0aGlzLm1pblgsIHkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHRoaXMubWF4WCwgeSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IHRoaXMubWluWCAtICh0aGlzLnZpZXdDZW50ZXJYICUgY2VsbFNpemUpOyB4IDwgdGhpcy5tYXhYOyB4ICs9IGNlbGxTaXplKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyh4LCB0aGlzLm1pblkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHgsIHRoaXMubWF4WSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgcGFydGljbGVJbmRleCBpbiB0aGlzLnBhcnRpY2xlcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnRpY2xlc1twYXJ0aWNsZUluZGV4XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVzW3BhcnRpY2xlSW5kZXhdLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgb2JqZWN0SW5kZXggaW4gdGhpcy5vYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqZWN0c1tvYmplY3RJbmRleF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdHNbb2JqZWN0SW5kZXhdLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBlbmREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBmcmFtZVN0b3AgPSBlbmREYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgICAgICAgICAgdmFyIGZyYW1lVGltZSA9IGZyYW1lU3RvcCAtIGZyYW1lU3RhcnQ7XG4gICAgICAgICAgICAvL2NvbnRleHQuZm9udD1cIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIC8vY29udGV4dC5maWxsVGV4dChmcmFtZVRpbWUgKyBcIiAvIFwiICsgdGlja1RpbWUscGxheWVyT3JnYW5pc20ucGh5c2ljcy54cG9zLCBwbGF5ZXJPcmdhbmlzbS5waHlzaWNzLnlwb3MpO1xuXG4gICAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gdGhpcy50YXJnZXRGcmFtZVRpbWUgLSBmcmFtZVRpbWUgLSB0aWNrVGltZTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0IDw9IDAgfHwgdGltZW91dCA+IHRoaXMudGFyZ2V0RnJhbWVUaW1lKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGljaygpO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50aWNrKCk7XG4gICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGRQYXJ0aWNsZSA9IGZ1bmN0aW9uIChwYXJ0aWNsZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChwYXJ0aWNsZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJ0aWNsZXMubGVuZ3RoIC0gMSA+PSB0aGlzLm1heFBhcnRpY2xlcykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGRPYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0VG9BZGQpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG9iamVjdFRvQWRkKTtcbiAgICAgICAgICAgIG9iamVjdFRvQWRkLndvcmxkSWQgPSB0aGlzLm9iamVjdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbW92ZU9iamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZVdvcmxkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0c1tpZF0gPSBudWxsO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW1cIik7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjb250ZXh0ID0gY3R4O1xuICAgICAgICAvL2RvY3VtZW50LmVkaXRvciA9IG5ldyBFZGl0b3IoJy5zaW1XcmFwcGVyJylcbiAgICAgICAgY2FyID0gbmV3IENhcigpO1xuICAgICAgICBsZXZlbCA9IG5ldyBMZXZlbCgpO1xuICAgICAgICB3b3JsZCA9IG5ldyBXb3JsZCgpO1xuXG4gICAgICAgIGFpQ2FyID0gbmV3IENhcigpO1xuICAgICAgICBkcml2ZXIgPSBuZXcgRHJpdmVyKGFpQ2FyKTtcblxuICAgICAgICB3b3JsZC5hZGRPYmplY3QoYWlDYXIpO1xuICAgICAgICB3b3JsZC5hZGRPYmplY3QoZHJpdmVyKTtcblxuICAgICAgICBhaUNhcjIgPSBuZXcgQ2FyKCk7XG4gICAgICAgIGRyaXZlcjIgPSBuZXcgRHJpdmVyKGFpQ2FyMik7XG4gICAgICAgIGFpQ2FyMi54cG9zID0gMDtcbiAgICAgICAgYWlDYXIyLnlwb3MgPSAwO1xuXG4gICAgICAgIHdvcmxkLmFkZE9iamVjdChhaUNhcjIpO1xuICAgICAgICB3b3JsZC5hZGRPYmplY3QoZHJpdmVyMik7XG5cbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gQ2FudmFzRnVuY3Rpb25zLmdldE1vdXNlUG9zKGNhbnZhcywgZXZ0KTtcblxuICAgICAgICAgICAgdmFyIG1vdXNlWCA9IHdvcmxkLnZpZXdDZW50ZXJYIC0gY2FudmFzLndpZHRoICogMC41ICsgbW91c2VQb3MueDtcbiAgICAgICAgICAgIHZhciBtb3VzZVkgPSB3b3JsZC52aWV3Q2VudGVyWSAtIGNhbnZhcy5oZWlnaHQgKiAwLjUgKyBtb3VzZVBvcy55O1xuICAgICAgICAgICAgY29udGV4dC5yZWN0KG1vdXNlWCAtIDMsIG1vdXNlWSAtIDMsIDMsIDMpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gQ2FudmFzRnVuY3Rpb25zLmdldE1vdXNlUG9zKGNhbnZhcywgZXZ0KTtcblxuICAgICAgICAgICAgICAgIG1vdXNlWCA9IG1vdXNlUG9zLnggKyB3b3JsZC52aWV3Q2VudGVyWCAtIGNhbnZhcy53aWR0aCAqIDAuNTtcbiAgICAgICAgICAgICAgICBtb3VzZVkgPSBtb3VzZVBvcy55ICsgd29ybGQudmlld0NlbnRlclkgLSBjYW52YXMuaGVpZ2h0ICogMC41O1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod29ybGQudmlld0NlbnRlclggKyBcIiwgXCIgKyBjYW52YXMud2lkdGggKiAwLjUpO1xuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJNb3VzZSBwb3NpdGlvbjogXCIgKyBtb3VzZVBvcy54ICsgXCIsXCIgKyBtb3VzZVBvcy55ICsgXCI6XCIgKyBtb3VzZVggKyBcIiwgXCIgKyBtb3VzZVk7XG4gICAgICAgICAgICAgICAgLy9kb2N1bWVudC5lZGl0b3IubW91c2VEb3duKG1vdXNlWCxtb3VzZVkpXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuXG4gICAgICAgIHZhciBwcmVzc2VkS2V5cyA9IHt9O1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHByZXNzZWRLZXlzW2Uua2V5Q29kZV0gPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5rZXl1cChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZGVsZXRlIHByZXNzZWRLZXlzW2Uua2V5Q29kZV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgICB0ZXN0QW5nbGUgPSAwO1xuICAgICAgICBjYXIueHBvcyA9IDMwMDtcblxuICAgICAgICB3b3JsZC5hZGRPYmplY3QoY2FyKTtcblxuICAgICAgICBzZXRUYXJnZXQgPSBmYWxzZTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jdHguY2xlYXJSZWN0KDAsMCwxMDAwLDEwMDApO1xuXG4gICAgICAgICAgICAvL0NhbWVyYSBtb3ZlbWVudDpcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZVggPSBNYXRoLmFicyhjYXIueHBvcyAtIHdvcmxkLnZpZXdDZW50ZXJYKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZVggPiA0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHhzcGVlZCA9IDAuMDAwNCAqIE1hdGgucG93KGRpc3RhbmNlWCwgMik7XG4gICAgICAgICAgICAgICAgaWYgKGNhci54cG9zID4gd29ybGQudmlld0NlbnRlclgpIHtcbiAgICAgICAgICAgICAgICAgICAgd29ybGQudHJhbnNsYXRlWCA9IC14c3BlZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYXIueHBvcyA8IHdvcmxkLnZpZXdDZW50ZXJYKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLnRyYW5zbGF0ZVggPSB4c3BlZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3b3JsZC50cmFuc2xhdGVYID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRpc3RhbmNlWSA9IE1hdGguYWJzKGNhci55cG9zIC0gd29ybGQudmlld0NlbnRlclkpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlWSA+IDQpIHtcbiAgICAgICAgICAgICAgICB2YXIgeXNwZWVkID0gMC4wMDAzICogTWF0aC5wb3coZGlzdGFuY2VZLCAyKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyLnlwb3MgPiB3b3JsZC52aWV3Q2VudGVyWSkge1xuICAgICAgICAgICAgICAgICAgICB3b3JsZC50cmFuc2xhdGVZID0gLXlzcGVlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhci55cG9zIDwgd29ybGQudmlld0NlbnRlclkpIHtcbiAgICAgICAgICAgICAgICAgICAgd29ybGQudHJhbnNsYXRlWSA9IHlzcGVlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdvcmxkLnRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3dvcmxkLnJlbmRlcigpO1xuICAgICAgICAgICAgLy9sZXZlbC5yZW5kZXIoY3R4KVxuXG4gICAgICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgICAgICAvL2Nhci5oZWFkaW5nKz0wLjAxO1xuXG4gICAgICAgICAgICBpZiAocHJlc3NlZEtleXNbMzldKSB7XG4gICAgICAgICAgICAgICAgY2FyLnN0ZWVySW5jcmVtZW50KDAuMDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXNzZWRLZXlzWzM3XSkge1xuICAgICAgICAgICAgICAgIGNhci5zdGVlckluY3JlbWVudCgtMC4wNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmVzc2VkS2V5c1szOF0pIHtcbiAgICAgICAgICAgICAgICBjYXIuZW5naW5lLnRyb3R0bGVVcCgwLjAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByZXNzZWRLZXlzWzQwXSkge1xuICAgICAgICAgICAgICAgIGNhci5icmFrZVJldmVyc2UoMC4wMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYXIueHBvcyAmJiBzZXRUYXJnZXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkcml2ZXIyLnNldFRhcmdldChuZXcgRHJpdmVSb3V0ZVBvaW50KGFpQ2FyLnhwb3MsIGFpQ2FyLnlwb3MsIDApKTtcbiAgICAgICAgICAgICAgICBkcml2ZXIyLnJlYWNoZWRUYXJnZXQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGRyaXZlci5zZXRUYXJnZXQobmV3IERyaXZlUm91dGVQb2ludChjYXIueHBvcywgY2FyLnlwb3MsIDApKTtcbiAgICAgICAgICAgICAgICBkcml2ZXIucmVhY2hlZFRhcmdldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNldFRhcmdldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MCk7XG4gICAgICAgIHdvcmxkLnRpY2soKTtcbiAgICB9KTtcbn0pKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY2xhc3MgQXBwIHtcbiAgICAvL1xufVxuIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgXCJjb3JlLWpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi92b29ycmFuZy5qc1wiO1xuXG5jb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpO1xuXG5uZXcgQXBwKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuLy8gSXQncyBlbXB0eSBhcyBzb21lIHJ1bnRpbWUgbW9kdWxlIGhhbmRsZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Jcbl9fd2VicGFja19yZXF1aXJlX18ueCA9IGZ1bmN0aW9uKCkge307XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfY29yZS1qc19pbmRleF9qcy1ub2RlX21vZHVsZXNfanF1ZXJ5X2Rpc3RfanF1ZXJ5X2pzXCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbM107XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3BpeGlfdHlwZXNjcmlwdF9ib2lsZXJwbGF0ZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwaXhpX3R5cGVzY3JpcHRfYm9pbGVycGxhdGVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpO1xuXG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gZnVuY3Rpb24oKSB7fTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxudmFyIHN0YXJ0dXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBmdW5jdGlvbigpIHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gc3RhcnR1cCB8fCAoZnVuY3Rpb24oKSB7fSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59OyIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
<?php

namespace Acme\Example;

class DataTest extends \PHPUnit_Framework_TestCase
{

    public function test_it_works()
    {
        $this->assertEquals('Hello!', Example::sayHello());
    }
}